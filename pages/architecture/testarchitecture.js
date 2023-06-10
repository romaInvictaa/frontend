import React from 'react';
import { useState, useEffect } from 'react';
import { Header, PageCard, QuestionCard, Loader, TestPage } from '@/components';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext.jsx';

const QUESTIONS_URL = '/api/questions';

const testarchitecture = () => {

  return (
    <>
      <Header slug={'/architecture'} />
      <div className="flex items-center justify-center mt-8">
        <TestPage category={'architecture'} />
      </div>
    </>
  );
};

export default testarchitecture;
