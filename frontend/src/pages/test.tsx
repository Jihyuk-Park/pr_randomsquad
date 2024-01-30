import TestPage from "@/component/pages/test";
import Head from "next/head";

export default function Test() {
  return (
    <>
      <Head>
        <title>푸릇푸릇 스쿼드 생성</title>
        <meta name="description" content="푸릇푸릇 전용 스쿼드 생성기" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <TestPage />
      </main>
    </>
  );
}
