import React from "react";
import { Heading } from "../Heading";
import Image from "next/image";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ title, subtitle, link, picture }) => {
    const { url, title: linkTitle } = link;
    const IMAGE_DIR_PREFIX = "/images/projects/";
    const IMAGE_EXTENSION = ".png";
    return (
        <a href={url} target="_blank" rel="noreferrer noopener">
            <div className={`${styles.projectCard}`}>
                <Image
                    src={`${IMAGE_DIR_PREFIX}${picture}${IMAGE_EXTENSION}`}
                    layout="fill"
                    alt=""
                    priority={true}
                    className={`${styles.projectCardPicture}`}
                />
                <div className={styles.projectCardContent}>
                    <span className={styles.projectCardSubtitle}>{subtitle}</span>
                    <Heading variant="h3" className={`${styles.projectCardTitle}`}>
                        {title}
                    </Heading>
                    <div className={styles.projectCardLink}>
                        {linkTitle}
                        <i className="bi bi-box-arrow-up-right inline-flex items-center ml-2"></i>
                        <span className="sr-only">Ouvrir {title} dans un nouvel onglet</span>
                    </div>
                </div>
            </div>
        </a>
    );
};
