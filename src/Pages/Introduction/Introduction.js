import React from 'react'
import TextLoop from "react-text-loop";

export default function Text({ containerRef }) {
  return (
    <div>
      <div data-scroll-container>
        <div data-scroll-section>
          <h1>
            <span data-scroll data-scroll-speed='5' data-scroll-position='top' data-scroll-delay='0.05'>{'Hey '}</span>
            <TextLoop interval={750}>
              <span> Haile </span>
              <span> Theo </span>
            </TextLoop>
          </h1>
          <p data-scroll>👋</p>
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
