import type { NextPage } from "next";
import Layout from "../../components/layout";

const Write: NextPage = () => {
  return (
    <Layout title="동네질문 작성" hasTabBar>
      <form className="px-4 py-10">
        <textarea 
          className="
            mt-1 shadow-sm w-full focus:ring-2 focus:ring-orange-400 
            rounded-md border-gray-300 focus:border-orange-400
            resize-none
            " 
          rows={4}
          placeholder="Ask a question!" 
        />
        <button className="
          mt-2 bg-orange-400 hover:bg-orange-500 w-full
        text-white py-2 px-4 border border-transparent border-r-[5px]
          rounded-md shadow-sm text-sm font-medium
          focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus: outline-none
        ">submit</button>
      </form>
    </Layout>
  );
}

export default Write;