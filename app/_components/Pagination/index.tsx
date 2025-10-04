import { NEWS_LIST_LIMIT } from "@/app/_constants";
import Link from "next/link";
import sytles from "./index.module.css";

type Props = {
  totalCount: number;
  current?: number;
  basePath?: string;
};

export default function Pagination({
  totalCount,
  current = 1,
  basePath = "/news",
}: Props) {
  const pages = Array.from(
    { length: Math.ceil(totalCount / NEWS_LIST_LIMIT) },
    (_, i) => i + 1
  );

  return (
    <nav>
      <ul className={sytles.container}>
        {pages.map((p) => (
          <li className={sytles.list} key={p}>
            {current !== p ? (
              <Link href={`/${basePath}/p/${p}`} className={sytles.item}>
                {p}
              </Link>
            ) : (
              <span className={`${sytles.item} ${sytles.current}`}>{p}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
