import Document, { Html, Head, Main, NextScript, DocumentContext} from 'next/document';
import React from "react";

class BlogDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <title>PINOT.KIM</title>
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="modal-root"/>
        </body>
      </Html>
    )
  }
}

export default BlogDocument;
