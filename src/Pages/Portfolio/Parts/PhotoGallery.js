import React from 'react'
import { ProGallery } from 'pro-gallery'
import { isMobile } from 'react-device-detect'
import 'pro-gallery/dist/statics/main.css'

function importAll(r) {
  return r.keys().map(r)
}

const images = importAll(require.context('./../../../Assets', false, /\.(png|jpe?g|svg|JPG)$/))

export default function Gallery() {
  const items = images.map((image, index) => {
    return {
      itemId: 'sample-id',
      mediaUrl: image,
      metaData: {
        type: 'image',
        height: 200,
        width: 100,
        title: 'sample-title',
        description: 'sample-description',
        focalPoint: [0, 0],
        link: {
          url: 'http://example.com',
          target: '_blank'
        }
      }
    }
  })

  const options = {
    galleryLayout: isMobile ? -1 : -2,
    // isVertical: true,
    scrollAnimation: 'SLIDE_UP',
    overlayAnimation: 'EXPAND',
    hoveringBehaviour: 'NEVER_SHOW',
    imageHoverAnimation: 'ZOOM_IN',
    imagePlacementAnimation: 'SLIDE'
  }

  const container = {
    width: isMobile ? window.innerWidth : window.innerWidth / 2
    // height: window.innerHeight
  }

  return <ProGallery items={items} options={options} container={container} />
}
