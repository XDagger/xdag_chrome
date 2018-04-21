import React from 'react';
import '../sass/page.scss';

const Page = ({ current, totalPage, goPrev, goNext, pageClick}) => {
  const pageNum = [];
  let begin;
  let len;
  if (totalPage > 5) {
    len = 5;
    if (current >= (totalPage - 2)) {
      begin = totalPage - 4;
    } else if (current <= 3) {
      begin = 1;
    } else {
      begin = current - 2;
    }
  } else {
    len = totalPage;
    begin = 1;
  }
  for (let i = 0; i < len; i += 1) {
    const showI = begin + i;
    if (current === showI) {
      pageNum.push({ num: showI, cur: true });
    } else {
      pageNum.push({ num: showI, cur: false });
    }
  }
  return (
    <div className="paginationDiv">
      <span className={current === 1 ? 'prev disable' : 'prev'} onClick={goPrev} >&lt;</span>
      {
        pageNum.map((curPageNum) => (
          <span
            key={curPageNum.num}
            onClick={() => pageClick(curPageNum.num)}
            className={curPageNum.cur ? 'current' : ''}>{curPageNum.num}
          </span>))
      }
      <span className={current <= (totalPage - 4) ? 'ell' : 'noShowP ell'} >...</span>
      <span className={current <= (totalPage - 4) ? '' : 'noShowP'} onClick={() => pageClick(totalPage)}>{totalPage}</span>
      <span className={current === totalPage ? 'next disable' : 'next'} onClick={goNext} >&gt;</span>
    </div>
  );

};

export default Page;
