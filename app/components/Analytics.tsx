'use client';

import Script from 'next/script';

export default function Analytics() {
    return (
        <>
            {/* Google Tag Manager / Analytics */}
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`} // Replace with your GA4 ID
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
            </Script>

            {/* LinkedIn Insight Tag (Crucial for Institutional Advisory) */}
            <Script id="linkedin-insight" strategy="afterInteractive">
                {`
          _linkedin_data_partner_id = "YOUR_PARTNER_ID";
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(_linkedin_data_partner_id);
        `}
            </Script>
            <Script
                src="https://snap.licdn.com/li.lms-analytics/insight.min.js"
                strategy="afterInteractive"
            />
        </>
    );
}