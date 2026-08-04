import LocalizedLink from "../../localization/LocalizedLink"
import styles from "../legal.module.css"

export default function TermsEnglish() {
  return <article className={styles.prose}>
    <h1 className={styles.pageTitle}>Terms of Use</h1>
    <p className={styles.lastUpdated}>Last updated: 26 June 2026</p>
    <p>These Terms of Use (“Terms”) are a legally binding agreement between you and <strong>Codemem Consulting d.o.o.</strong>, with its registered office in Obedišće, Municipality of Križ, Republic of Croatia (OIB: 26881262647) (hereinafter: “SportSync”, “we”, “us”, “our”), and govern your access to and use of the SportSync mobile application and associated website (together: the “Platform”). Please read these Terms carefully before using the Platform.</p>

    <h2 className={styles.sectionTitle}>1. Acceptance of the Terms</h2>
    <p>By registering for, downloading, or using the Platform, you confirm that you have read, understood, and accepted these Terms in full, including our <LocalizedLink href="/privacy">Privacy Policy</LocalizedLink> and <LocalizedLink href="/cookies">Cookie Policy</LocalizedLink>, which form an integral part of these Terms. If you disagree with any part of the Terms, you must not access or use the Platform.</p>
    <p>If you use the Platform on behalf of a legal entity, you warrant that you are authorized to accept these Terms on its behalf.</p>
    <p>The purchase of additional in-app functionality is also subject to the Apple App Store or Google Play terms displayed during purchase.</p>

    <h2 className={styles.sectionTitle}>2. Definitions</h2>
    <p><strong>“Platform”</strong> – the SportSync mobile application and sportsync.hr website, including associated services and features.</p>
    <p><strong>“User”</strong> – a registered natural person.</p>
    <p><strong>“Player”</strong> – a User who books, searches for, or joins sports Games.</p>
    <p><strong>“Organizer” or “Game administrator”</strong> – a User with administrator privileges for a particular Game.</p>
    <p><strong>“Game”</strong> – a sports activity created on the Platform, with a defined sport and organizational information.</p>
    <p><strong>“Season”</strong> – a feature available for a football Game that enables entry of teams, matches, results, standings, and statistics for a period of up to one year.</p>
    <p><strong>“One-year Season”</strong> – a one-time digital product purchased in the application that enables one new Season to be started for a specific football Game.</p>
    <p><strong>“User Content”</strong> – information, photographs, messages, and other materials uploaded or published by a User.</p>
    <p><strong>“Rating”</strong> – a rating and/or comment one User leaves for another after participating in the same Game.</p>
    <p><strong>“Chat”</strong> – private direct-message conversations and a particular Game’s group chat.</p>

    <h2 className={styles.sectionTitle}>3. Eligibility and minimum age</h2>
    <p>Use of the Platform is permitted only to persons who are at least <strong>16 years old</strong>. Year of birth is entered during registration to enforce this restriction. By accepting the Terms, you confirm that you meet the minimum-age requirement.</p>
    <p>A User between 16 and 18 may make a purchase only if they have the necessary legal capacity or parental/legal-representative consent where required by applicable law. Purchase approvals and restrictions are handled through Apple and Google mechanisms; SportSync does not perform additional parental verification.</p>
    <p>We reserve the right to suspend or close an account that we reasonably suspect is used by a person under 16 and to handle related data in accordance with the Privacy Policy.</p>

    <h2 className={styles.sectionTitle}>4. Registration and user account</h2>
    <p>Use of the Platform requires registration. To create an account, you must provide a valid email address, mobile phone number (verified by a one-time SMS password—OTP), and year of birth.</p>
    <p>Identity confirmation during registration uses an OTP delivered by SMS. The same process applies when changing the registered mobile number.</p>
    <p>You are responsible for the accuracy of all data you provide and for updating it when it changes. You must keep credentials (passwords and OTP codes) confidential and may not share them with third parties.</p>
    <p>Each natural person may have only one active user account. Creating an account for another person without their express authorization is prohibited.</p>
    <p>If your account is accessed without authorization, notify us immediately through the <LocalizedLink href="/contact">contact form</LocalizedLink>. We are not liable for damage caused by unauthorized use before you notify us.</p>

    <h2 className={styles.sectionTitle}>5. User roles</h2>
    <p>The Platform distinguishes two basic roles:</p>
    <p><strong>Player</strong> – may view available Games, submit a request to join, and manage their own bookings and profile.</p>
    <p><strong>Organizer (Game administrator)</strong> – in addition to all Player capabilities, may create Games, set participation conditions, accept or reject Player requests, cancel Games and, for a football Game, purchase, start, edit, and finish a Season. If a Game has multiple administrators, each has these powers.</p>
    <p>SportSync reserves the right to introduce additional roles or change existing-role powers with prior notice to users.</p>

    <h2 className={styles.sectionTitle}>6. Game bookings and cancellations</h2>
    <p>A Player may request a place in an available Game created by an Organizer. The booking is confirmed when the Organizer accepts the request.</p>
    <p>A Player may cancel a confirmed booking through the Platform at any time without a financial penalty. We recommend timely cancellation so the Organizer can invite another player.</p>
    <p>An Organizer may cancel an entire Game at any time. All registered Players receive a cancellation push notification.</p>
    <p>SportSync does not guarantee the availability of sports facilities and does not arrange facility capacity; arrangements for use of a facility are solely the Organizer’s responsibility.</p>

    <h2 className={styles.sectionTitle}>7. User ratings</h2>
    <p>Users may rate one another only in the context of a specific sport in which they participated together in the same Game. A rating may be left only after the Game is marked complete.</p>
    <p>False, offensive, discriminatory, or malicious ratings are prohibited. Ratings must be based on actual experience from the shared Game.</p>
    <p>SportSync reserves the right to remove a rating that violates these Terms or applicable law without prior notice to its author.</p>
    <p>A User who considers a rating inaccurate or malicious may object through the <LocalizedLink href="/contact">contact form</LocalizedLink>.</p>

    <h2 className={styles.sectionTitle}>8. User Content</h2>
    <p>Users may upload a profile photo and post messages in direct-message and Game chats. By publishing such content, you confirm the following:</p>
    <p>You possess all necessary rights (copyright and image rights) to publish the photograph, and messages or other content you submit do not infringe third-party rights.</p>
    <p>The photograph, messages, and other User Content do not contain unlawful, offensive, sexually explicit, hateful, threatening, spam, or otherwise inappropriate content.</p>
    <p>By publishing a photograph or sending a message, you grant SportSync a non-exclusive, royalty-free, worldwide license to store, display, transmit, and technically adapt that content solely to provide, secure, moderate, and improve the Platform and only for as long as needed for those purposes.</p>
    <p>SportSync reserves the right to remove, without prior notice, any User Content that violates these Terms or is unlawful.</p>

    <h2 className={styles.sectionTitle}>9. Profile visibility and user search</h2>
    <p>SportSync is a social platform intended to connect recreational athletes. Public profile visibility is a fundamental characteristic of the service and necessary for it to work—without it, users could not find players, fill Games, or be found by Organizers.</p>
    <p>By registering and using the Platform, you accept the following visibility conditions:</p>
    <p><strong>Public profile</strong> – your first and last name, profile photo (if uploaded), selected sports, and average rating are visible to all registered Platform users in search results and Game views.</p>
    <p><strong>Contact details are not public</strong> – email address, mobile number, and year of birth are never visible to other users.</p>
    <p><strong>Direct messaging between users</strong> – any registered user may start a direct-message chat with another. Starting a conversation does not disclose your contact details; only information publicly displayed within the Platform remains visible.</p>
    <p><strong>Future privacy setting</strong> – SportSync plans to introduce a “private” profile mode that excludes a user from search results. Users will be notified when this feature is introduced.</p>
    <p><strong>Request for removal from search</strong> – until privacy settings are introduced, a user may request removal from search through the <LocalizedLink href="/contact">contact form</LocalizedLink>. We will process the request within <strong>5 business days</strong>.</p>
    <p>The legal basis for profile-visibility processing is performance of a contract (Article 6(1)(b) GDPR), because a public profile is an integral part of the service accepted upon registration. Details are in Section 3 of the <LocalizedLink href="/privacy">Privacy Policy</LocalizedLink>.</p>

    <h2 className={styles.sectionTitle}>10. Notifications</h2>
    <p>The Platform sends the following types of notifications:</p>
    <p><strong>Push notifications</strong> – for Game events (booking confirmation, Game cancellation, new player request, Game filled, etc.) and new chat messages. Depending on device settings, a notification may include a message preview. You can manage push notifications in device settings.</p>
    <p><strong>Email notifications</strong> – sent exclusively for password resets.</p>
    <p><strong>SMS notifications</strong> – one-time OTP codes sent during registration and when changing the registered mobile number.</p>
    <p>If you disable push notifications, you may miss important information about your Games. Technical notifications (OTP) cannot be disabled because they are necessary for account security.</p>

    <h2 className={styles.sectionTitle}>11. Chat, blocking, and reports</h2>
    <p>The Platform offers two chat types: <strong>direct-message chat</strong> between two registered users and <strong>Game chat</strong> available only to that Game’s members. The Organizer has no special moderation right to delete Game-chat messages.</p>
    <p>Chat messages are not end-to-end encrypted. SportSync may access and read messages when necessary to provide chat functionality, customer support, account security, manual report review, and abuse prevention.</p>
    <p>Users may block and report other users, report individual messages, and mute direct-message conversations and Game chats. SportSync manually reviews every report.</p>
    <p>Sent messages cannot later be edited or deleted through the Platform. A Game chat remains available while the Game exists; deleting the Game also deletes its chat. Direct messages and Game-chat messages are retained for no more than <strong>3 months</strong>, unless longer retention is necessary for a report, protection of rights, abuse prevention, or compliance with legal obligations, as further described in the <LocalizedLink href="/privacy">Privacy Policy</LocalizedLink>.</p>

    <h2 className={styles.sectionTitle}>12. Football Seasons</h2>
    <p>The Season feature is currently available only for Games whose sport is football. A Season cannot be purchased or started for other sports.</p>
    <p>Only an administrator of the specific Game may purchase and start a new Season. After successful purchase confirmation, the administrator enters the Season’s initial information, including its name and the names and number of teams.</p>
    <p>A Season lasts no more than one year from the successful-purchase date. An administrator may end it earlier. During an active Season, administrators may enter and edit data, while all participants in the associated Game may view the Season, results, and statistics.</p>
    <p>A completed Season remains available to Game participants in read-only mode. To continue entering new matches, results, and statistics after a Season ends or expires, a new One-year Season must be purchased. The new Season begins separately with the first new match, while earlier Seasons remain archived.</p>
    <p>The purchase and Season are tied to a specific Game. They cannot be transferred to another Game, user account, or person. Transferring or assigning administrator status to another User allows that administrator to manage the existing Season but does not transfer the purchase outside the Game.</p>
    <p>Deleting the Game ends access to its active and archived Seasons. Deleting or leaving the Game or changing its administrator does not itself create an automatic refund right, without prejudice to rights arising under mandatory law or the rules of the store through which the purchase was made.</p>

    <h2 className={styles.sectionTitle}>13. Purchase, price, and refunds</h2>
    <p>“One-year Season” is a one-time product, not a subscription. The purchase does not renew automatically. Product availability, final price, currency, and included taxes are shown in the Apple App Store or Google Play immediately before purchase confirmation.</p>
    <p>Apple processes iOS purchases and charges through In-App Purchase, while Google processes Android purchases through Google Play Billing. Apple or Google issues the receipt and processes payment-method data. SportSync does not receive or store card numbers, bank-account data, or other payment credentials.</p>
    <p>RevenueCat is used for technical transaction confirmation and purchase-status synchronization. A Season cannot start until the purchase has been successfully confirmed, including while it is pending. A failed or interrupted purchase does not activate the product.</p>
    <p>A valid purchase linked to a Game is available on iOS and Android after signing in to the appropriate SportSync account. The purchased product cannot separately be transferred to another Game or user.</p>
    <p>Refund requests for iOS purchases are submitted to Apple and those for Android purchases to Google, under the applicable store’s rules and mandatory law. For help with duplicate charges, incorrect activation, or a technical issue, contact SportSync support through the <LocalizedLink href="/contact">contact form</LocalizedLink> or at <a href="mailto:support@sportsync.hr">support@sportsync.hr</a>.</p>
    <p>If Apple or Google approves a refund, revokes a purchase, or determines a chargeback, SportSync—after receiving confirmation through RevenueCat—ends the Season linked to that transaction and disables further editing. Revocation of one transaction does not affect a separate, later valid purchase for a new Season.</p>
    <p>Nothing in these Terms limits consumer rights that cannot be excluded or restricted by agreement under applicable mandatory law.</p>

    <h2 className={styles.sectionTitle}>14. Prohibited conduct</h2>
    <p>You may not use the Platform for:</p>
    <p>Providing false information during registration or use of any Platform feature.</p><p>Creating fake Games or intentionally disrupting Organizers and Players.</p><p>Sending unlawful, threatening, harassing, discriminatory, deceptive, or spam messages through direct-message or Game chat.</p><p>Harassing, intimidating, discriminating against, or insulting other users based on race, sex, age, religion, sexual orientation, disability, or another protected characteristic.</p><p>Circumventing blocking, abusing the reporting system, or repeatedly contacting a user against their clearly expressed wishes.</p><p>Unauthorized access to Platform infrastructure, hacking attempts, distributing malware, or otherwise disrupting the Platform.</p><p>Commercial advertising or spam without SportSync’s prior written approval.</p><p>Any other activity unlawful under Croatian law or harmful to SportSync, users, or third parties.</p>

    <h2 className={styles.sectionTitle}>15. Intellectual property</h2>
    <p>All intellectual-property rights in the Platform—including design, source code, graphics, logos, databases, and text—are exclusively owned by SportSync or licensed from third parties. Nothing in these Terms transfers any intellectual-property rights to a User.</p>
    <p>Users receive a limited, non-transferable, non-exclusive, revocable license to use the Platform solely for personal, non-commercial purposes in accordance with these Terms. Unauthorized reproduction, distribution, public display, or modification of Platform content is strictly prohibited.</p>

    <h2 className={styles.sectionTitle}>16. Personal-data protection</h2>
    <p>Collection and processing of personal data are governed by our <LocalizedLink href="/privacy">Privacy Policy</LocalizedLink>, which forms an integral part of these Terms. Data is processed in accordance with the GDPR and Croatian personal-data-protection law.</p>
    <p>For purchases, we process technical transaction data, including transaction or order identifiers, product, platform, purchase time, purchase/refund/revocation status, and internal User and Game identifiers. We do not receive payment-card or bank-account data. Details about recipients, purposes, legal bases, and retention periods are in the Privacy Policy.</p>

    <h2 className={styles.sectionTitle}>17. Limitation of liability</h2>
    <p>The Platform is provided “as is” and “as available” to the extent permitted by applicable law. This provision does not limit statutory consumer rights concerning conformity and operation of paid digital content or services.</p>
    <p>To the extent permitted by applicable law, SportSync is not liable for direct, indirect, incidental, special, or consequential damage resulting from use of or inability to use the Platform.</p>
    <p>SportSync is not liable for damage resulting from inaccurate information entered by users.</p>
    <p>SportSync is not liable for message content, views, or user conduct in direct-message or Game chat except where mandatory law provides otherwise. The availability of reporting or manual moderation does not create an obligation to pre-screen every message.</p>
    <p>SportSync is not liable for injury or property damage occurring during or as a result of participation in sports Games organized through the Platform. SportSync is solely a technology intermediary and bears no responsibility for physical sporting activities.</p>
    <p>SportSync is not liable for temporary Platform unavailability caused by maintenance, technical difficulties, or circumstances beyond our control (force majeure).</p>
    <p>Nothing in this Section excludes SportSync’s liability for intent or gross negligence or consumer rights protected by mandatory law.</p>

    <h2 className={styles.sectionTitle}>18. Account suspension and closure</h2>
    <p>SportSync may temporarily suspend or permanently close an account for breach of these Terms, suspected fraud, chat abuse, substantiated reports by other users, a competent-authority request, or protection of Platform integrity.</p>
    <p>The user will be notified of suspension or closure by email unless notice would prejudice an investigation or the law provides otherwise.</p>
    <p>A User may close their account at any time in application settings or through the <LocalizedLink href="/contact">contact form</LocalizedLink>. After closure, personal data will be deleted or anonymized under our <LocalizedLink href="/privacy">Privacy Policy</LocalizedLink>. For data-deletion instructions, also see <LocalizedLink href="/delete-account">Account deletion</LocalizedLink>.</p>

    <h2 className={styles.sectionTitle}>19. Third-party services</h2>
    <p>The Platform uses third-party services, including cloud hosting, push notifications, an SMS gateway, data storage, Apple App Store, Google Play, and RevenueCat. In-app purchases are additionally subject to Apple’s or Google’s terms and rules.</p>
    <p>SportSync is not responsible for Apple’s or Google’s independent decisions about billing, account status, or refunds, but we will reasonably cooperate in resolving a technical issue concerning product activation within the Platform. This does not exclude SportSync’s responsibility for its own obligations under mandatory law.</p>
    <p>External links are provided for information and do not mean SportSync endorses their content or assumes responsibility for third-party practices.</p>

    <h2 className={styles.sectionTitle}>20. Changes to the Terms</h2>
    <p>We may change the Terms due to new features or for security, technical, or legal reasons. A new version will be published on this page with an updated date.</p>
    <p>Where required by applicable law, users will be notified in advance of changes that significantly affect existing rights or obligations. Provisions governing a new optional feature, such as a One-year Season, may take effect when the feature is released. Changes do not retroactively affect completed purchases in a manner that diminishes mandatory consumer rights.</p>

    <h2 className={styles.sectionTitle}>21. Governing law and dispute resolution</h2>
    <p>These Terms are governed by the law of the Republic of Croatia, without prejudice to mandatory rights a consumer enjoys under the law of their habitual residence where applicable.</p>
    <p>We will first attempt to resolve a dispute amicably. Jurisdiction for court disputes is determined by applicable jurisdiction rules; these Terms do not impose exclusive jurisdiction contrary to mandatory consumer law.</p>
    <p>A consumer may also consider alternative dispute resolution before notified Croatian bodies for consumer ADR. Information about available bodies is published on the Croatian Central Consumer Portal. The former European online dispute-resolution platform is no longer available.</p>

    <h2 className={styles.sectionTitle}>22. Severability</h2>
    <p>If a competent court declares any provision of these Terms void, unlawful, or unenforceable, that provision will be severed and the remaining Terms will continue in full force.</p>

    <h2 className={styles.sectionTitle}>23. Contact and written complaints</h2>
    <p>For questions, technical support, reports of users or messages, and complaints concerning the Platform or a purchase, contact us through the <LocalizedLink href="/contact">contact form</LocalizedLink> or at <a href="mailto:support@sportsync.hr">support@sportsync.hr</a>.</p>
    <p>A consumer may submit a written complaint through those channels. We will respond in writing no later than <strong>15 days</strong> after receipt and clearly state whether we accept its merits. We retain written-complaint records for the period prescribed by law.</p>
  </article>
}
