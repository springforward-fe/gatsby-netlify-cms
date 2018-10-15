import React from 'react'
import PropTypes from 'prop-types'
import RehypeReact from "rehype-react";

export const HTMLContent = ({ content, className, components}) => {
  let html = null;
  if (components) {
    html = new RehypeReact({
      createElement: React.createElement,
      components,
    }).Compiler(content);
  } else {
    html = <div dangerouslySetInnerHTML={{ __html: content}} />;
  }
  return <div className={className}>{html}</div>
};

export const ReactContent = ({ content, className }) => (
  <div className={className} />
);

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
);

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
};

HTMLContent.propTypes = Content.propTypes;

export default Content
