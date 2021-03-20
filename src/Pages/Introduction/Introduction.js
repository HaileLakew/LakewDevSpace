import React from 'react'
import TextLoop from "react-text-loop";

export default function Text({ containerRef }) {
  return (
    <div>
      <div data-scroll-container>
        <div data-scroll-section>
          {/* <h1 data-scroll>
            {'Hey '}
            <TextLoop interval={750}>
              <span> Haile </span>
              <span> Theo </span>
            </TextLoop>
          </h1>
          <p data-scroll>👋</p> */}
                                  <h1 class="c-header_title o-h1" data-scroll>
                            <span class="c-header_title_line">
                                <span data-scroll data-scroll-speed="3" data-scroll-position="top">Locomotive</span>
                            </span>
                            <span class="c-header_title_line">
                                <span data-scroll data-scroll-speed="2" data-scroll-position="top">Scroll</span>
                            </span>
                            <span class="c-header_title_line -version u-white">
                                <span class="o-h1" data-scroll data-scroll-speed="3" data-scroll-position="top" data-scroll-delay="0.05">v</span><span class="o-h1" data-scroll data-scroll-speed="5" data-scroll-position="top" data-scroll-delay="0.05">4</span><span class="o-h1" data-scroll data-scroll-speed="2" data-scroll-position="top" data-scroll-delay="0.05">.</span><span class="o-h1" data-scroll data-scroll-speed="4" data-scroll-position="top" data-scroll-delay="0.05">0</span>
                            </span>
                        </h1>
        </div>
        <div data-scroll-section>
          <h2 data-scroll data-scroll-speed="1" data-scroll-direction="horizontal">
            What's up?
          </h2>
          <p data-scroll data-scroll-speed="2">
            😬
          </p>
        </div>
      </div>
    </div>
  )
}
