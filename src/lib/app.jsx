import React from 'react'
import Router from 'react-router'
let {RouteHandler} = Router

import './app.css!'

export default class App extends React.Component {
  render() {
    return <div>
      <nav _flex="align-center" _layout="p1 max960" _type="upcase small2 lh1.4">
        <h1 _flex-child="grow1" _type="semibold"><a href="/" _link="invisible">Glen Maddern</a></h1>
        <ul _flex="align-center wrap justify-end">
          <li _layout="pl1"><a href="/articles" _link="subtle">Articles</a></li>
          <li _layout="pl1"><a href="/projects" _link="subtle">Projects</a></li>
          <li _layout="pl1"><a href="/talks" _link="subtle">Talks</a></li>
          <li _layout="pl1"><a href="/work" _link="subtle">Work</a></li>
        </ul>
      </nav>
      <RouteHandler/>
      <footer _layout="p2 small:p1 mb2 max840" _before="hr">
        <figure _layout="max600" _flex="justify-center align-center"><img _flex-child="shrink0" src="/assets/images/me_160.jpg" _border="round polaroid" _size="4" _layout="mr1"/>
          <figcaption _type="small1 center lh1.4"><span _type="bold">Glen Maddern</span> is an independent Web Developer from Melbourne, Australia.
            <div _layout="pt0.5">You should <span _type="semibold">get in touch</span> using one of the following useful internet services:
            </div>
            <div _flex="justify-center align-center" _layout="pt0.5"><a href="https://twitter.com/glenmaddern" _link="inline">
              <svg _size="1.5*1.5" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path style={{opacity:1,fill:'currentColor'}} d="M512,97.209c-18.838,8.354-39.082,14.001-60.33,16.54c21.687-13,38.343-33.585,46.187-58.115 c-20.299,12.039-42.778,20.78-66.705,25.49c-19.16-20.415-46.461-33.17-76.674-33.17c-58.011,0-105.043,47.029-105.043,105.039 c0,8.233,0.929,16.25,2.72,23.939c-87.3-4.382-164.701-46.2-216.509-109.753c-9.042,15.514-14.223,33.558-14.223,52.809 c0,36.444,18.544,68.596,46.73,87.433c-17.219-0.546-33.416-5.271-47.577-13.139c-0.01,0.438-0.01,0.878-0.01,1.321 c0,50.894,36.209,93.348,84.261,103c-8.813,2.399-18.094,3.686-27.674,3.686c-6.769,0-13.349-0.66-19.764-1.887 c13.368,41.73,52.16,72.104,98.126,72.949c-35.95,28.175-81.243,44.967-130.458,44.967c-8.479,0-16.84-0.497-25.058-1.471 c46.486,29.806,101.701,47.197,161.021,47.197c193.211,0,298.868-160.062,298.868-298.872c0-4.554-0.103-9.084-0.305-13.59 C480.11,136.773,497.918,118.273,512,97.209z" class="inner-shape"></path>
              </svg>
            </a><a href="https://github.com/geelen" _link="inline">
              <svg _size="1.5*1.5" _layout="m0-1" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path style={{opacity:1,fill:'currentColor'}} d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M408.028,408.028 c-19.76,19.758-42.756,35.266-68.354,46.093c-6.503,2.75-13.106,5.164-19.8,7.246V423c0-20.167-6.917-35-20.75-44.5 c8.667-0.833,16.625-2,23.875-3.5s14.917-3.667,23-6.5s15.333-6.208,21.75-10.125s12.583-9,18.5-15.25s10.875-13.333,14.875-21.25 s7.167-17.417,9.5-28.5s3.5-23.292,3.5-36.625c0-25.833-8.417-47.833-25.25-66c7.667-20,6.833-41.75-2.5-65.25l-6.25-0.75 c-4.333-0.5-12.125,1.333-23.375,5.5s-23.875,11-37.875,20.5c-19.833-5.5-40.417-8.25-61.75-8.25c-21.5,0-42,2.75-61.5,8.25 c-8.833-6-17.208-10.958-25.125-14.875s-14.25-6.583-19-8s-9.167-2.292-13.25-2.625s-6.708-0.417-7.875-0.25s-2,0.333-2.5,0.5 c-9.333,23.667-10.167,45.417-2.5,65.25c-16.833,18.167-25.25,40.167-25.25,66c0,13.333,1.167,25.542,3.5,36.625 s5.5,20.583,9.5,28.5s8.958,15,14.875,21.25s12.083,11.333,18.5,15.25s13.667,7.292,21.75,10.125s15.75,5,23,6.5 s15.208,2.667,23.875,3.5c-13.667,9.333-20.5,24.167-20.5,44.5v39.115c-7.549-2.247-14.99-4.902-22.3-7.994 c-25.597-10.827-48.594-26.335-68.353-46.093c-19.758-19.759-35.267-42.757-46.093-68.354C46.679,313.195,41,285.043,41,256 s5.679-57.195,16.879-83.675c10.827-25.597,26.335-48.594,46.093-68.353c19.758-19.759,42.756-35.267,68.353-46.093 C198.805,46.679,226.957,41,256,41s57.195,5.679,83.675,16.879c25.599,10.827,48.595,26.335,68.354,46.093 c19.758,19.758,35.266,42.756,46.093,68.353C465.321,198.805,471,226.957,471,256s-5.679,57.195-16.879,83.675 C443.294,365.271,427.786,388.27,408.028,408.028z"></path>
              </svg>
            </a><a href="mailto:hi@glenmaddern.com" _link="invisible inline" _layout="block">
              <svg _size="1.5*1.5" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path style={{opacity:1,fill:'currentColor'}} d="M464,64H48C21.6,64,0,85.6,0,112v320c0,26.4,21.6,48,48,48h416c26.4,0,48-21.6,48-48V112C512,85.6,490.4,64,464,64z  M199.37,275.186L64,380.632V129.811L199.37,275.186z M88.19,128h335.62L256,254L88.19,128z M204.644,280.85L256,336l51.355-55.15 L412.632,416H99.368L204.644,280.85z M312.63,275.186L448,129.811v250.821L312.63,275.186z"></path>
              </svg>
            </a></div>
          </figcaption>
        </figure>
      </footer>
    </div>
  }
}
