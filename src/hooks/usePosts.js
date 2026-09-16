import { useState, useRef, useEffect, useCallback } from 'react';
import { postApi } from '../services/api';
import axios from 'axios';
import { useSearchParams } from 'react-router';

const PER_PAGE = 2;

export const usePosts = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  // 데이터배열을 상태로 관리
  const [posts, setPosts] = useState([]);
  
  const selectedUser = searchParams.get('user');

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [pageNumber, setPageNumber] = useState(1);
  const [nextPage, setNextPage] = useState(null);

  // loading tag를 저장하기 위한 ref
  const loaderRef = useRef(null);

  useEffect(() => {
    setPageNumber(1);
    setPosts([]);
  }, [selectedUser]);

  useEffect(() => {
    const controller = new AbortController();
    let cancelled = false;

    const loadPosts = async () => {
      const condition = `_page=${pageNumber}&_per_page=${PER_PAGE}`;

      const query = selectedUser
        ? `username=${selectedUser}&${condition}`
        : condition;

      setIsLoading(true);
      setError(null);

      try {
        const envelope = await postApi.getPage(query, {
          signal: controller.signal,
        });

        setPosts((current) => [...current, ...envelope.data]);
        setNextPage(envelope.next);
      } catch (err) {
        if (axios.isCancel(err)) {
          return;
        }
        console.error('게시물 주소가 잘못되었습니다.', err);
        setError('게시물을 불러오지 못했습니다.');
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    };

    loadPosts();

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [selectedUser, pageNumber]);

  // 무한 스크롤 옵저버 처리
  useEffect(() => {
    if (nextPage === null || isLoading) {
      return;
    }

    const target = loaderRef.current;
    if (target === null) {
      return;
    }

    // 옵저버를 생성해서 감시를 맡김
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPageNumber((current) => current + 1);
      }
    });

    // 감시대상을 지정
    observer.observe(target);

    return () => observer.disconnect();
  }, [isLoading, nextPage]);

  // 삭제신호를 울릴 수 있는 진동벨 함수를 내린다.
  const removePost = async (id) => {
    // 백업
    const previous = posts;
    // 지운다는 것은 -> 필터링한다는 것
    setPosts(posts.filter((post) => post.id !== id));

    try {
      await postApi.remove(id);
    } catch (err) {
      console.error('게시물을 지우지 못했어요.', err);
      setPosts(previous);
    }
  };

  const selectUser = useCallback((username) => {
    // 주소창에 ?user=xxx 를 달아주기만 하면됨
    setSearchParams((current) => { 
      // current는 기존에 user파라미터의 값
      const next = new URLSearchParams(current);

      // 이번에 새로 누른 user파라미터 == username
      if (next.get('user') === username) {
        next.delete('user');
      } else {
        next.set('user', username);
      }
      return next;
    });
  }, [setSearchParams]);

  // 댓글 개수 처리를 위한 진동벨 함수 생성
  const countUpComment = (id) => {
    setPosts((current) =>
      current.map((post) =>
        post.id === id
          ? { ...post, commentCount: post.commentCount + 1 }
          : post,
      ),
    );
  };

  // 피드 생성 처리를 위한 진동벨 함수 생성
  const addPost = (createdPost) => {
    setPosts((current) => [createdPost, ...current]);
  };

  return {
    posts,
    isLoading,
    error,
    loaderRef,
    addPost,
    removePost,
    countUpComment,
    selectUser,
  };

};
