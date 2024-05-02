import React from 'react';
import Link from 'next/link';

interface ListLinkProps {
  data: string;
  url: string;
}

const ListLink: React.FC<ListLinkProps> = ({ data, url }) => {
  return (
    <>
      <li>
        <Link href={url} target='_blank'>
          {data}
        </Link>
      </li>
    </>
  );
};

export default ListLink;