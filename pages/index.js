import Layout from "../components/Layout";
import SocialLinks from "../components/SocialLinks";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="flex flex-col gap-5">
          <div className="w-8/12 m-auto flex flex-col space-y-4 justify-center items-center py-6 text-center shadow rounded">
            <img
              src="/img/kh-rakib.jpg"
              alt="kh rakib"
              className="rounded-full ring-2 h-32 w-32 object-contain text-center"
            />

            <div className="space-y-2 dark:text-white">
              <h2 className="text-xl leading-3">KH Rakib</h2>
              <h4>Software Developer</h4>
              <div className="flex gap-2 justify-center">
                <SocialLinks />
              </div>
            </div>
          </div>

          <div className="prose-base w-8/12 m-auto dark:text-white">
            <p>
              A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.
            </p>
            <p>
              My work timings are pretty flexible which makes me overlap my work hours with all time zones for communication and status sharing!
            </p>
          </div>
        </div>
      </Layout>
    </>
  )
}