'use client';
import Link from 'next/link';

export default function SideBar({ categories }) {
  return (
    <>
      <nav className="container-categories">
        <ul className="categories-list">
          {categories.map((category, index) => (
            <li key={index} className="categories-list-item">
              <Link href={'/category/' + category.id}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="backdrop"></div>
    </>
  );
}
