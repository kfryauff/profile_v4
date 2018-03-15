import React from 'react'
import ReactTooltip from 'react-tooltip'


const SocialMediaIcon = ({ media, label }) => {
  return (
    <a href={media.link} target={media.target}>
      <img src={media.image} className="icon" data-for={label} data-tip />
      <ReactTooltip
        id={label}
        className="tooltip"
        place="right"
        type="dark"
        effect="solid"
      >
        {media.label}
      </ReactTooltip>
    </a>
  )
}

export default SocialMediaIcon
