const cards = document.querySelectorAll('.np-card');
const descTitle = document.getElementById('desc-title');
const descText = document.getElementById('desc-text');
const descContainer = document.querySelector('.card-description');

cards.forEach((card, index) => {
  card.addEventListener('click', () => {

    // Define titles and texts separately
    const titles = [
      "Information Security Policy",
      "Roles and Responsibilities",
      "Business Impact Analysis",
      "Risk Assessment",
      "IT Security Audits",
      "Security Controls Catalog",
      "SEC 540 Data Classifications",
      "IT System and Data Sensitivity Classification",
      "Sensitive IT System Inventory and Definition"
    ];

    const texts = [
      "Our Information Security Policy establishes a comprehensive framework for protecting the confidentiality, integrity, and availability of data, systems, and networks across the organization. It sets clear security objectives, compliance requirements, and operational practices designed to safeguard organizational information from internal and external threats, while ensuring regulatory and contractual obligations are met. The policy emphasizes the protection of sensitive information, including personally identifiable information (PII), financial records, intellectual property, and other critical business data, against unauthorized access, disclosure, modification, or destruction. <a href='#'>Learn More</a>",
      "Clear roles and responsibilities are fundamental to maintaining an effective and accountable information security program. Every member of the organization, from executive leadership to operational staff, has a distinct responsibility in protecting information assets, ensuring compliance, and mitigating risks. Employees are expected to follow established security policies, participate in mandatory training programs, report any suspicious activities, and protect sensitive data in all daily operations. Managers and supervisors are responsible for enforcing security procedures within their teams, monitoring adherence to policies, and escalating issues to higher management or the Information Security Officer (ISO) as necessary. <a href='#'>Learn More</a>",
      "The Business Impact Analysis (BIA) is a critical component of our organization's information security and continuity planning efforts. It systematically identifies and evaluates essential business functions, determining the potential impact of disruptions on these operations. By assessing the financial, operational, and reputational consequences of various threats—such as cyberattacks, natural disasters, or system failures—the BIA enables us to prioritize recovery strategies effectively.<a href='#'>Learn More</a>",
      
        `<p>Risk assessments evaluate potential threats and vulnerabilities to IT systems and data. The process typically includes:</p>
<ul>
  <li><strong>Identify Assets:</strong> Catalog critical systems, data, and processes.</li>
  <li><strong>Analyze Threats & Vulnerabilities:</strong> Assess possible risks and weaknesses.</li>
  <li><strong>Evaluate Impact & Likelihood:</strong> Measure business impact if risks materialize.</li>
  <li><strong>Mitigation Plans:</strong> Recommend controls and prioritize risk treatments.</li>
</ul>
<a href='#'>Learn More</a>`
,
      `<p>IT security audits are conducted to evaluate the effectiveness of security measures, compliance with policies, and adherence to regulatory standards. These audits help identify gaps and strengthen the overall security posture.</p>
<ul>
  <li><strong>Compliance Review:</strong> Ensures alignment with industry standards (e.g., ISO, NIST, GDPR).</li>
  <li><strong>Vulnerability Assessment:</strong> Identifies weaknesses in systems, networks, and processes.</li>
  <li><strong>Control Effectiveness:</strong> Tests whether implemented safeguards are working as intended.</li>
  <li><strong>Continuous Improvement:</strong> Provides recommendations to reduce risks and enhance resilience.</li>
</ul>
<a href='#'>Learn More</a>`
,
    `<p>The Security Controls Catalog provides a comprehensive list of technical and organizational measures used to safeguard systems and data. These controls are aligned with best practices and regulatory requirements.</p>
<ul>
  <li><strong>Access Controls:</strong> Role-based access, authentication, and authorization policies.</li>
  <li><strong>Network Security:</strong> Firewalls, intrusion detection/prevention, and segmentation.</li>
  <li><strong>Data Protection:</strong> Encryption, backup, and secure data handling processes.</li>
  <li><strong>Monitoring & Logging:</strong> Continuous monitoring of systems for anomalies and threats.</li>
  <li><strong>Incident Response:</strong> Defined processes to detect, respond, and recover from security incidents.</li>
</ul>
<a href='#'>Learn More</a>`
,
     `<p>The Data Classification Standard (SEC 540) establishes how agencies across the Commonwealth of Virginia (COV) classify and protect information. Agencies must safeguard electronic data in line with the Code of Virginia and comply with federal regulations such as HIPAA, FERPA, PCI, and others.</p>
<ul>
  <li><strong>Why it matters:</strong> Protects confidentiality, integrity, and availability while meeting legal and regulatory requirements.</li>
  <li><strong>Who it applies to:</strong> All employees, contractors, and partners handling organizational data in any format.</li>
  <li><strong>How data is classified:</strong> Based on confidentiality, regulatory needs, business impact, and access requirements.</li>
  <li><strong>Classification labels:</strong> Define usage, compliance, and sensitivity or handling requirements.</li>
</ul>
<a href='#'>Learn More</a>`,

`<p>We classify IT systems and data based on their sensitivity to ensure the right level of protection. Classification categories typically include:</p>
  <ul>
    <li><strong>Public:</strong> Information intended for general access without restrictions.</li>
    <li><strong>Internal:</strong> Business-use information not for public disclosure.</li>
    <li><strong>Confidential:</strong> Sensitive data requiring controlled access.</li>
    <li><strong>Restricted:</strong> Highly sensitive systems/data with strict protection measures.</li>
  </ul>
  <a href='#'>Learn More</a>`,
     `<p>An inventory of sensitive IT systems helps maintain visibility and proper protection. Each system is defined by:</p>
<ul>
  <li><strong>System Name & Owner:</strong> Identification and accountability.</li>
  <li><strong>Data Handled:</strong> Type of sensitive or regulated information processed.</li>
  <li><strong>Criticality:</strong> Impact of downtime or data loss on business operations.</li>
  <li><strong>Controls Applied:</strong> Security measures in place for protection.</li>
</ul>
<a href='#'>Learn More</a>`


 

 

    ];

    descTitle.textContent = titles[index];
    descText.innerHTML = texts[index];

    // Trigger animation
    descContainer.classList.remove('show');  // reset animation
    void descContainer.offsetWidth;          // force reflow
    descContainer.classList.add('show');
  });
});
