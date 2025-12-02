// ============================================
// COMPONENTS/SECTIONS/APPROACH.JSX
// Section "Mon approche" / qualités
// ============================================

import { memo } from "react";
import { useLanguage } from "../../lib/i18n";

const ApproachCard = memo(function ApproachCard({
  number,
  title,
  description,
}) {
  return (
    <div className="approach__card">
      <span className="approach__number">{number}</span>
      <h3 className="approach__card-title">{title}</h3>
      <p className="approach__card-desc">{description}</p>
    </div>
  );
});

export const Approach = memo(function Approach({ onHoverEnter, onHoverLeave }) {
  const { t } = useLanguage();
  const approaches = t("approaches");

  return (
    <section className="section-padding" aria-labelledby="approach-heading">
      <div className="container">
        <h2 className="label" id="approach-heading">
          {t("label_approach")}
        </h2>

        <div className="approach__grid">
          {approaches.map((item, index) => (
            <ApproachCard
              key={index}
              number={String(index + 1).padStart(2, "0")}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
});
