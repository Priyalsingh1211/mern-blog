import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500
        justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
        <div className="flex-1 justify-center flex flex-col">
            <h2 className="text-2xl">
                Want any ideas for writing blogs ?
            </h2>
            <p className="text-gray-500 my-2">
                Checkout these resources for amazing ideas 
            </p>
            <Button gradientDuoTone='purpleToPink'>
               <a href="https://blog.hubspot.com/marketing/how-to-start-a-blog" target="_blank" rel="noopener noreferrer">
                 Blog Hubspot
               </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://justabitfurther.wordpress.com/wp-content/uploads/2020/05/blogging-insights.jpg"/>
        </div>
    </div>
  )
}
