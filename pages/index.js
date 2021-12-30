import Layout from "../components/Layout";
import SocialLinks from "../components/SocialLinks";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="flex flex-col gap-5">
          <div className="w-8/12 m-auto flex flex-col space-y-4 justify-center items-center py-6 text-center shadow rounded">
            <img
              src="https://avatars.githubusercontent.com/u/69071127?v=4"
              alt="kh rakib"
              className="rounded-full ring-2 h-32 object-contain text-center"
            />

            <div className="space-y-2">
              <h2 className="text-xl leading-3 text-black">KH Rakib</h2>
              <h4>Software Developer</h4>
              <div className="flex gap-2 justify-center">
                <SocialLinks />
              </div>
            </div>
          </div>

          <div className="prose-base w-8/12 m-auto">
            <p>
              A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.
            </p>
            <p>
              My work timings are pretty flexible which makes me overlap my work hours with all time zones for communication and status sharing!
            </p>

            <p>
              For years parents have espoused the health benefits of eating garlic bread with cheese to their
              children, with the food earning such an iconic status in our culture that kids will often dress
              up as warm, cheesy loaf for Halloween.
              For years parents have espoused the health benefits of eating garlic bread with cheese to their
              children, with the food earning such an iconic status in our culture that kids will often dress
              up as warm, cheesy loaf for Halloween.

              For years parents have espoused the health benefits of eating garlic bread with cheese to their
              children, with the food earning such an iconic status in our culture that kids will often dress
              up as warm, cheesy loaf for Halloween.
              For years parents have espoused the health benefits of eating garlic bread with cheese to their
              children, with the food earning such an iconic status in our culture that kids will often dress
              up as warm, cheesy loaf for Halloween.


            </p>
          </div>
        </div>
      </Layout>
    </>
  )
}