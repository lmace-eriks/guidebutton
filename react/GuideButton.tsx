import React from 'react';
import { Link } from 'vtex.render-runtime';

// Styles
import styles from "./styles.css";

interface GuideButtonProps {
  link: string
  imgSrc: string
  imgSrcFallback: string
  text: string
  newTab: boolean
}

const GuideButton: StorefrontFunctionComponent<GuideButtonProps> = ({ link, imgSrc, text, newTab, imgSrcFallback }) => {
  if (!imgSrcFallback && !imgSrc) return <></>;
  if (!link) return <></>;

  return (
    <Link href={link} target={newTab ? "_blank" : "_self"} className={styles.button}>
      <div className={styles.buttonWrapper}>
        <img src={imgSrcFallback || imgSrc}
          alt=""
          width={250}
          height={110}
          className={styles.buttonImage}
          loading="lazy" />
        {text && <div className={styles.buttonText}>{text}</div>}
      </div>
    </Link>
  );
}

GuideButton.schema = {
  title: "Guide Button",
  type: "object",
  properties: {
    imgSrc: {
      title: "250px 110px - Image",
      type: "string",
      widget: {
        "ui:widget": "image-uploader"
      }
    },
    imgSrcFallback: {
      title: "Fallback Image",
      description: "OPTIONAL | If VTEX uploader won't work, paste the image source here.",
      type: "string"
    },
    text: {
      title: "Button Text",
      description: "Optional - Text overlayed on top of image.",
      type: "string",
      widget: { "ui:widget": "textarea" }
    },
    link: {
      title: "Link",
      description: "Required - Absolute or Relative path url.",
      type: "string",
      widget: { "ui:widget": "textarea" }
    },
    newTab: {
      title: "Open in new tab?",
      type: "boolean"
    },

  }
}

export default GuideButton;
