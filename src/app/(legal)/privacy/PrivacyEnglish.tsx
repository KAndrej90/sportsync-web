import LocalizedLink from "../../localization/LocalizedLink"
import styles from "../legal.module.css"

export default function PrivacyEnglish() {
  return <article className={styles.prose}>
    <h1 className={styles.pageTitle}>Privacy Policy</h1>
    <p className={styles.lastUpdated}>Last updated: August, 22 2026</p>
    <p>This Privacy Policy describes how <strong>Codemem Consulting d.o.o.</strong>, with its registered office in Obedišće, Municipality of Križ, Republic of Croatia (hereinafter: “SportSync”, “we”, “us”), collects, processes, and stores your personal data when you use the SportSync mobile application and associated website (together: the “Platform”).</p>
    <p>Personal data is processed in accordance with Regulation (EU) 2016/679 of the European Parliament and of the Council (GDPR) and the Croatian Act on the Implementation of the General Data Protection Regulation (Official Gazette 42/2018). We recommend that you carefully read this document and our <LocalizedLink href="/terms">Terms of Use</LocalizedLink>.</p>

    <h2 className={styles.sectionTitle}>1. Data controller</h2>
    <p><strong>Codemem Consulting d.o.o.</strong><br />Selska ulica 35, Obedišće, Municipality of Križ, Republic of Croatia<br />OIB (Croatian personal identification number): 26881262647<br />Email: <a href="mailto:support@sportsync.hr">support@sportsync.hr</a><br />Contact form: <LocalizedLink href="/contact">contact</LocalizedLink></p>
    <p>For any questions concerning privacy, personal data processing, or the exercise of your rights, contact us at <a href="mailto:support@sportsync.hr">support@sportsync.hr</a> or through the <LocalizedLink href="/contact">contact form</LocalizedLink>.</p>

    <h2 className={styles.sectionTitle}>2. Personal data we collect</h2>
    <p>We collect only data necessary to provide the Platform or expressly listed below.</p>
    <p><strong>2.1. Data you provide directly</strong></p>
    <ul>
      <li><strong>Email address</strong> – to create an account and sign in and, for accounts with password sign-in enabled, to send a password-reset link.</li>
      <li><strong>Year of birth</strong> – to verify the minimum age of 16. It is entered during registration and is required to access the Platform.</li>
      <li><strong>First and last name</strong> – for identification within the Platform.</li>
      <li><strong>Profile photo</strong> – optional; displayed to other users.</li>
      <li><strong>Sports preferences and playing level</strong> – to personalize displayed Games and sport-specific ratings.</li>
      <li><strong>City</strong> – the city you select during registration or later in profile settings, used to display relevant Games, notifications, and content near you. Your city is not visible to other users and does not represent your device’s precise location.</li>
      <li><strong>Security and communication settings</strong> – data about blocked users, muted direct-message conversations and muted Game chats, and reports you submit about users or individual messages.</li>
    </ul>
    <p><strong>2.2. Data we receive from Google or Apple</strong></p>
    <p>If you choose to sign in through Google or Apple, the selected provider verifies your identity and sends SportSync the data needed to create, link, or sign in to an account:</p>
    <ul>
      <li><strong>Google</strong> – the unique Google Account identifier, verified email address, first and last name, and basic profile information Google makes available, including a possible profile-photo URL. SportSync uses the identifier, email, and first and last name; we do not import or save the Google profile photo as your SportSync profile photo. We request only the standard <em>openid</em>, <em>email</em>, and <em>profile</em> scopes, not access to contacts, files, calendars, or other Google services.</li>
      <li><strong>Apple</strong> – the unique Apple Account identifier, verified email address, and, when Apple makes them available, first and last name. You may choose an Apple private relay address instead of your real email address; SportSync then receives and stores that relay address.</li>
    </ul>
    <p>In both cases, we receive an identity token that our server validates to confirm the token’s authenticity, validity, issuer, and audience. We store the provider’s unique identifier with your SportSync account so we can recognize you on subsequent sign-ins. We do not receive your year of birth or city from Google or Apple; you enter them directly in SportSync when completing registration.</p>

    <p><strong>2.3. Data generated through use of the Platform</strong></p>
    <ul>
      <li><strong>Game data</strong> – Games you created (as Organizer) or joined (as Player), including date, location, and sport.</li>
      <li><strong>Season data</strong> – the associated football Game, Season start and end, Game administrators and participants, matches, teams, results, standings, and statistics. Participants in the associated Game can access the active and completed Seasons; completed Seasons are displayed in read-only mode.</li>
      <li><strong>Purchase data</strong> – Apple transaction ID and original transaction ID or Google order ID, product identifier, purchase store and platform, purchase date and time, purchase, refund or revocation status, internal SportSync user identifier, and the identifier of the Game to which the purchase is linked.</li>
      <li><strong>Ratings</strong> – ratings you gave to or received from users with whom you played a Game, linked to the specific sport.</li>
      <li><strong>Chat data</strong> – content of direct messages and Game chat messages, sender and recipient or chat-member identities, associated Game, sending time, and data connected with blocking, muting, and in-chat reports.</li>
      <li><strong>Technical data</strong> – IP address, device type, operating-system and application version, and push-notification token. This data is collected automatically for proper Platform operation, security, and troubleshooting.</li>
    </ul>
    <p>Chat messages are not end-to-end encrypted. SportSync may access and read messages when necessary to deliver chat functionality, provide customer support, maintain account security, manually process reports, and prevent abuse.</p>
    <p><strong>2.4. Data we do not collect</strong></p>
    <ul>
      <li>We do not collect or store mobile phone numbers and do not use SMS OTP codes.</li>
      <li>We do not collect or store payment-card numbers, bank-account details, card security codes, or other payment credentials. Apple or Google processes that data under its own rules and privacy policies.</li>
      <li>We do not collect real-time device-location data.</li>
      <li>We do not collect health data, biometric characteristics, or other special categories of data under Article 9 GDPR.</li>
    </ul>

    <h2 className={styles.sectionTitle}>3. Why we process data and on what legal basis</h2>
    <p>We process your data only when we have a clear reason and an appropriate legal basis under the GDPR. The purposes for which each category is used are explained below.</p>
    <p>When this Policy uses the term <strong>“performance of a contract”</strong>, it does not mean that you sign a separate paper contract with us. It means that we must process certain data to provide the service you use through the SportSync application in accordance with our <LocalizedLink href="/terms">Terms of Use</LocalizedLink>. For example, an account cannot be created without an email address, a Game cannot be organized without Game data, and a purchased feature cannot be activated without purchase data.</p>
    <ul>
      <li><strong>Registration, sign-in, and account management</strong> – we use your email address and related security data and, depending on your chosen sign-in method, a password or a Google or Apple identifier and identity token to create and link accounts, sign you in, reset a password where applicable, and protect accounts. The legal basis is <em>performance of a contract</em> and, for security measures, our <em>legitimate interest</em>.</li>
      <li><strong>Minimum-age verification</strong> – year of birth verifies that users meet the minimum age of 16. The basis is <em>performance of a contract</em> and our <em>legitimate interest</em> in applying the restriction consistently and protecting minors from inappropriate use.</li>
      <li><strong>Password reset by email</strong> – for accounts with password sign-in enabled, your email is used to send a reset link only at your request. The basis is <em>performance of a contract</em>.</li>
      <li><strong>Push notifications</strong> – the device token is used for notifications about Game status, join requests, new chat messages, and similar Platform events. The basis is <em>performance of a contract</em>. You can disable them in device settings.</li>
      <li><strong>Games, bookings, and participation</strong> – Game data enables Game creation, player applications, accepting or rejecting requests, cancellation, and participant display. The basis is <em>performance of a contract</em>.</li>
      <li><strong>Direct messages and Game chats</strong> – message content and participant data enable communication between Platform users. The basis is <em>performance of a contract</em>.</li>
      <li><strong>Blocking and muting</strong> – security and communication settings apply user blocks and muted direct-message conversations and Game chats. The basis is <em>performance of a contract</em>.</li>
      <li><strong>Reporting users and messages and manual moderation</strong> – reports and related data protect users, prevent abuse, enforce the Terms, and establish, exercise, or defend legal claims. The basis is our <em>legitimate interest</em>.</li>
      <li><strong>Profile and profile-photo display</strong> – first and last name and profile photo allow recognition in Games, search, and Platform communication. The basis is <em>performance of a contract</em>.</li>
      <li><strong>Displaying relevant Games, notifications, and content based on city</strong> – we use the city you selected to show content relevant to your area. Your city is not visible to other users, and we do not use it to track your real-time location. The basis is <em>performance of a contract</em>.</li>
      <li><strong>Profile visibility in search</strong> – name, photo, selected sports, and average rating may be visible to registered users in search results and Game views. Contact details are never visible to other users. The basis is <em>performance of a contract</em>. Until private-profile settings are introduced, request removal from search through the <LocalizedLink href="/contact">contact form</LocalizedLink>.</li>
      <li><strong>User ratings</strong> – ratings help users understand the experience of playing with others and decide about joining Games. The basis is <em>performance of a contract</em> and our <em>legitimate interest</em>.</li>
      <li><strong>Managing and displaying football Seasons</strong> – team, match, result, standings, and statistics data provides the purchased functionality to all participants in the associated football Game. The basis is <em>performance of a contract</em>.</li>
      <li><strong>Purchase verification and activation</strong> – transaction data confirms purchases, activates the One-year Season, links the purchase to a Game, synchronizes access between iOS and Android, and handles refunds or revocations. The basis is <em>performance of a contract</em>.</li>
      <li><strong>Fraud prevention, complaint resolution, and protection of legal claims</strong> – transaction and related technical data prevents abuse, resolves complaints, verifies purchase status, and protects our or users’ rights. The basis is our <em>legitimate interest</em> and, where applicable, compliance with <em>legal obligations</em>.</li>
      <li><strong>Platform improvement and troubleshooting</strong> – technical data maintains stability, detects problems, supports security, and improves user experience. The basis is our <em>legitimate interest</em>. Where possible, data is used anonymously or in aggregate.</li>
      <li><strong>Compliance with legal obligations</strong> – certain data may be processed for accounting records, competent-authority requests, or other legal obligations. The basis is a <em>legal obligation</em>.</li>
    </ul>
    <p>We do not use your data for automated decision-making or profiling that would produce legal or similarly significant effects on you.</p>

    <h2 className={styles.sectionTitle}>4. Data recipients and service providers</h2>
    <p>We share data only to the extent needed to operate the Platform, process purchases, maintain security, and comply with legal obligations. A recipient’s role depends on the processing: some providers act as our processors, while Apple, Google, or another provider may act as an independent controller for part of the processing under its own terms and privacy rules.</p>
    <p>Categories of recipients include:</p>
    <ul>
      <li><strong>Cloud-infrastructure and hosting providers</strong> – data storage and application delivery.</li><li><strong>Push-notification service provider</strong> – delivery of notifications to your device.</li><li><strong>Email-delivery service</strong> – password-reset emails and other necessary notices.</li><li><strong>File storage</strong> – profile-photo storage.</li>
      <li><strong>Apple</strong> – if you choose Sign in with Apple, identity verification and delivery of the data listed in Section 2.2; for iOS purchases, purchase and payment processing, transaction confirmation, receipts, and refund requests under Apple’s rules.</li>
      <li><strong>Google</strong> – if you choose Sign in with Google, identity verification and delivery of the data listed in Section 2.2; for Android purchases, purchase and payment processing, transaction confirmation, receipts, and refund requests under Google Play rules.</li>
      <li><strong>RevenueCat, Inc.</strong> – technical verification and management of purchase status. RevenueCat receives the internal user identifier and purchase/store-account data required to confirm a transaction, but not the user’s name, email, mobile number, or payment-card data.</li>
    </ul>
    <p>We do not sell, rent, or commercially share personal data with third parties for their own marketing purposes.</p>
    <p>Chat messages are stored within our server infrastructure. We do not use a separate external chat provider, although hosting providers may act as processors to the extent necessary to operate the Platform.</p>
    <p>We may disclose data to competent authorities when required by law, necessary to comply with a binding request, or needed to establish, exercise, or defend legal claims.</p>

    <h2 className={styles.sectionTitle}>5. Transfers outside the EU/EEA</h2>
    <p>Certain providers, including cloud-infrastructure providers, Apple, Google, and RevenueCat, may process data outside the European Economic Area (EEA), particularly in the United States. Where we are responsible for such a transfer, we ensure an appropriate safeguard, such as:</p>
    <ul><li>a European Commission adequacy decision, including the EU–U.S. Data Privacy Framework where applicable; or</li><li>the European Commission’s Standard Contractual Clauses (SCCs) and, where necessary, additional safeguards.</li></ul>
    <p>For processing they conduct as independent controllers, Apple and Google apply their own international-transfer mechanisms described in their privacy policies. Contact us through the <LocalizedLink href="/contact">contact form</LocalizedLink> for further information.</p>

    <h2 className={styles.sectionTitle}>6. Data-retention periods</h2>
    <ul>
      <li><strong>User account and profile</strong> – including a linked Google or Apple identifier, retained while the account is active. After closure, data is deleted or anonymized within <strong>30 days</strong>, except data we must or may retain longer for legal obligations, fraud, complaints, or legal claims.</li>
      <li><strong>Active and completed Season data</strong> – retained while the associated Game exists so participants can view the active Season and archive. Deleting the Game removes linked Season data, except transaction records retained under the periods below.</li>
      <li><strong>Transaction and accounting data</strong> – records required as accounting documentation are retained for at least <strong>11 years</strong> from the last day of the relevant financial year. Data required for purchase verification, refunds, fraud prevention, complaints, and legal claims may be retained for that period or longer when necessary for ongoing proceedings or another legal obligation.</li>
      <li><strong>Ratings</strong> – retained while the rated user’s account exists; anonymized or deleted after account deletion.</li>
      <li><strong>Direct messages and Game chat messages</strong> – up to <strong>3 months</strong> after sending, unless longer retention is necessary for a report, abuse prevention, or legal obligations.</li>
      <li><strong>Reports, blocks, mutes, and security records</strong> – as long as needed to apply settings, process a report, protect rights, and prevent abuse.</li>
      <li><strong>Technical logs</strong> – up to <strong>12 months</strong>, then deleted or anonymized unless needed for an incident investigation or legal claim.</li>
    </ul>

    <h2 className={styles.sectionTitle}>7. Data security</h2>
    <p>We apply appropriate technical and organizational safeguards, including:</p>
    <ul><li>TLS encryption whenever data is transferred between the application and server.</li><li>Password hashing; passwords are never stored in readable form.</li><li>Identity-token validation for sign-in through Google or Apple.</li><li>Access controls for chat messages; only authorized persons may access content when necessary for support, security, and manual report review.</li><li>Data-access controls; employees and contractors access only data required for their work.</li><li>Regular security reviews of code and infrastructure.</li><li>Server-side verification of purchase and refund status through RevenueCat before Season access is enabled or continued.</li></ul>
    <p>Despite these measures, no system is completely secure. If a security incident could compromise your data, we will notify you and the competent supervisory authority (AZOP) within GDPR deadlines.</p>
    <p>Although chat messages are protected in transit and storage using appropriate security measures, they are not end-to-end encrypted.</p>

    <h2 className={styles.sectionTitle}>8. Cookies and similar technologies</h2>
    <p>The sportsync.hr website does not use analytics, advertising, or marketing cookies and does not use Google Analytics. It stores your selected language in your browser&apos;s local storage solely to display the website in your chosen language. This preference is not used to track you. Details are provided in our <LocalizedLink href="/cookies">Cookie Policy</LocalizedLink>.</p>
    <p>The mobile application does not use cookies; it stores an authentication token locally on your device solely to maintain your signed-in session.</p>
    <h2 className={styles.sectionTitle}>9. Minors</h2>
    <p>The Platform is intended for persons over <strong>16 years of age</strong>. We collect year of birth during registration solely to verify this condition. We do not knowingly collect personal data from persons under 16.</p>
    <p>If you suspect that a person under 16 has registered an account, or if you are a parent/guardian and notice that your child uses the Platform, contact us immediately through the <LocalizedLink href="/contact">contact form</LocalizedLink>. We will close such accounts and delete associated personal data unless a legal obligation or justified reason requires temporary retention of certain data.</p>
    <h2 className={styles.sectionTitle}>10. Your rights as a data subject</h2>
    <p>Under the GDPR, you have the following rights concerning your personal data:</p>
    <ul>
      <li><strong>Right of access</strong> – request confirmation whether we process your data and receive a copy.</li><li><strong>Right to rectification</strong> – request correction of inaccurate or completion of incomplete data. You can edit much of it in profile settings.</li><li><strong>Right to erasure (“right to be forgotten”)</strong> – request deletion of your account and personal data. See <LocalizedLink href="/delete-account">Account deletion</LocalizedLink>. Previously sent chat messages and transaction data retained for legal obligations, complaints, fraud, or claims may not be deleted immediately; the periods in Section 6 apply.</li><li><strong>Right to restriction</strong> – in certain cases, request that we suspend processing.</li><li><strong>Right to object</strong> – object to processing based on legitimate interest. To object to profile visibility in search, request removal through the <LocalizedLink href="/contact">contact form</LocalizedLink>; we will process it within <strong>5 business days</strong>.</li><li><strong>Right to data portability</strong> – request a machine-readable copy where applicable.</li><li><strong>Right to withdraw consent</strong> – where processing relies on consent, withdraw it at any time without affecting prior lawful processing.</li>
    </ul>
    <p>Submit requests through the <LocalizedLink href="/contact">contact form</LocalizedLink>. We will respond within <strong>30 days</strong> of receipt (with a possible extension for complex cases, of which we will notify you).</p>
    <h2 className={styles.sectionTitle}>11. Complaint to a supervisory authority</h2>
    <p>If you believe our processing infringes the GDPR or applicable law, you may complain to the competent supervisory authority:</p>
    <p><strong>Croatian Personal Data Protection Agency (AZOP)</strong><br />Ulica Metela Ožegovića 16, 10 000 Zagreb<br />Web: <a href="https://azop.hr" target="_blank" rel="noopener noreferrer">azop.hr</a><br />Email: <a href="mailto:azop@azop.hr">azop@azop.hr</a></p>
    <p>Please contact us before submitting a complaint so that we may try to resolve your inquiry directly.</p>
    <h2 className={styles.sectionTitle}>12. Automated decision-making and profiling</h2>
    <p>SportSync does not use automated systems to make legally binding decisions or decisions significantly affecting you without human intervention. Game recommendations and content display are based on your selected preferences, not automated profiling that would have legal or similarly significant effects.</p>
    <h2 className={styles.sectionTitle}>13. In-app purchases</h2>
    <p>For football Games, the Platform offers a one-time purchase of the “One-year Season” product. Apple App Store processes purchases on iOS and Google Play on Android, while RevenueCat technically verifies purchase and refund status.</p>
    <p>SportSync does not receive payment-card or bank-account data. We receive only the technical and transaction data listed in Section 2, required to link a purchase to a Game, enable access, synchronize platforms, and handle refunds or revocations.</p>
    <p>If Apple or Google approves a refund or revokes a transaction, RevenueCat may provide the changed purchase status. Editing of the Season linked to that transaction then stops in accordance with the Terms of Use. A separate, later valid purchase for a new Season is not affected by revocation of the earlier transaction.</p>
    <h2 className={styles.sectionTitle}>14. Changes to this Privacy Policy</h2>
    <p>We may periodically update this Policy due to changes to the Platform, service providers, or legal requirements. A new version will be published here with an updated “Last updated” date.</p>
    <p>Where required by law or where a change may significantly affect your interests, we will notify you before it takes effect. Changes describing a new optional feature may take effect when that feature is published. This Policy serves as notice of personal-data processing; the legal basis for processing does not rest solely on continued use of the Platform.</p>
    <h2 className={styles.sectionTitle}>15. Contact</h2>
    <p>For questions, objections, or requests concerning personal-data processing, contact us through the <LocalizedLink href="/contact">contact form</LocalizedLink> or at <a href="mailto:support@sportsync.hr">support@sportsync.hr</a>.</p>
  </article>
}
