import React, { useEffect } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';

// Official Cal.com embed. Cal's <Cal> initializes once and ignores later theme
// changes, so we give it key={theme}: flipping the site theme remounts the
// embed and it re-initializes in the new theme. minHeight keeps it from
// collapsing while the embed auto-sizes to content.
export default function CalEmbed({ calLink, theme, brandColor }) {
  useEffect(() => {
    let active = true;
    (async () => {
      const cal = await getCalApi();
      if (!active) return;
      cal('ui', {
        theme,
        styles: { branding: { brandColor } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();
    return () => {
      active = false;
    };
  }, [theme, brandColor]);

  return (
    <Cal
      key={theme}
      calLink={calLink}
      config={{ theme, layout: 'month_view' }}
      style={{ width: '100%', minHeight: '760px' }}
    />
  );
}
