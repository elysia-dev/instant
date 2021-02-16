import React, { useEffect, useState } from 'react';
import Building from '../../shared/image/building_image.png';
import '../../css/style.scss';
import { useTranslation } from 'react-i18next';

function PropertyComponent() {
  const { t } = useTranslation();
  return (
    <>
      <div className="property__image-wrapper">
        <p className="property__header-text header-text">{t("property.header_label")}</p>
        <img
          src={Building}
          className="property__image"
          alt="Elysia"
        />
      </div>
    </>
  );
}

export default PropertyComponent