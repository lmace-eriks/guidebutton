
import React, { ReactChildren } from 'react';

// Styles
import styles from "./styles.css";

interface GuideButtonProps {

}

const GuideButton: StorefrontFunctionComponent<GuideButtonProps> = ({ }) => {

  return (
    <div className={styles.buttonContainer}>
      <div className={styles.buttonWrapper}>
        <a role="button" className={styles.button}>
          <span className={styles.buttonText}>Bike Buying Guide</span>
          <img src="https://eriksbikeshop.vtexassets.com/arquivos/bike-guide-hub.jpg" className={styles.buttonImage} />
        </a>
      </div>
    </div>
  )
}

GuideButton.schema = {
  title: 'editor.guidebutton.title',
  description: 'editor.guidebutton.description',
  type: 'object',
  properties: {}
}

export default GuideButton;