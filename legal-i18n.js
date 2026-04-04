(function () {
  const legalTranslations = {
    privacy: {
      en: {
        htmlLang: "en",
        title: "Privacy Policy — NestMind",
        description: "NestMind Privacy Policy — how we collect, use, and protect your data.",
        pageLabel: "Legal",
        pageTitle: "Privacy Policy",
        pageMeta: "Effective date: April 4, 2026 · Last updated: April 2026",
        appStoreCta: "App Store",
        appStoreAria: "Download on the App Store",
        footerPrivacy: "Privacy Policy",
        footerTerms: "Terms of Use",
        footerSupport: "Support",
        privacyHref: "privacy.html",
        termsHref: "terms.html",
        supportHref: "support.html"
      },
      tr: {
        htmlLang: "tr",
        title: "Gizlilik Politikası — NestMind",
        description: "NestMind Gizlilik Politikası — verilerinizi nasıl topladığımız, kullandığımız ve koruduğumuz.",
        pageLabel: "Yasal",
        pageTitle: "Gizlilik Politikası",
        pageMeta: "Yürürlük tarihi: 4 Nisan 2026 · Son güncelleme: Nisan 2026",
        appStoreCta: "App Store",
        appStoreAria: "App Store'dan indir",
        footerPrivacy: "Gizlilik Politikası",
        footerTerms: "Kullanım Koşulları",
        footerSupport: "Destek",
        privacyHref: "privacy.html?lang=tr",
        termsHref: "terms.html?lang=tr",
        supportHref: "support.html",
        proseHtml: `
          <section id="introduction">
            <h2>1. Giriş</h2>
            <p>NestMind'e hoş geldiniz. NestMind, bireysel bir geliştirici tarafından geliştirilen ve işletilen bir aile koordinasyon uygulamasıdır ("biz", "bize", "bizim"). Bu Gizlilik Politikası, NestMind iOS uygulamasını ("Uygulama") kullanırken bilgileri nasıl topladığımızı, kullandığımızı, sakladığımızı ve koruduğumuzu açıklar.</p>
            <p>Uygulamayı kullanarak bu politikada açıklanan uygulamaları kabul etmiş olursunuz. Kabul etmiyorsanız lütfen Uygulamayı kullanmayın. Metin, açık ve anlaşılır bir dilde hazırlanmıştır.</p>
            <div class="callout">
              <strong>Taahhüdümüz:</strong> Kişisel verilerinizi satmayız. Reklam göstermeyiz. Ailenize ait bilgiler yalnızca NestMind hizmetini sunmak için kullanılır.
            </div>
          </section>

          <section id="data-collected">
            <h2>2. Topladığımız Veriler</h2>
            <p>Hizmeti sunmak için gerekli olan asgari verileri toplarız. Bunlar şunlardır:</p>
            <p><strong>Hesap bilgileri</strong></p>
            <ul>
              <li>E-posta ve şifre ile kayıt olduğunuzda e-posta adresiniz</li>
              <li>Apple ile Giriş kullandığınızda Apple ID adı ve e-posta adresi (Apple anonim yönlendirme adresi sağlayabilir)</li>
              <li>Profiliniz için seçtiğiniz görünen ad</li>
              <li>Yüklerseniz profil fotoğrafınız</li>
            </ul>
            <p><strong>Aile ve uygulama verileri</strong></p>
            <ul>
              <li>Oluşturduğunuz aile adı ve eklediğiniz üyeler</li>
              <li>Başlık, açıklama, atanan kişi, son tarih ve tamamlama durumu dahil görevler</li>
              <li>Yapılandırdığınız rutinler ve tekrar eden planlar</li>
              <li>Takvim etkinlikleri ve hatırlatmalar</li>
              <li>Bir ebeveyn/vasi tarafından eklenen çocuk profilleri (ad ve isteğe bağlı avatar)</li>
            </ul>
            <p><strong>Teknik veriler</strong></p>
            <ul>
              <li>Hesabınızı güvenli şekilde tanımlamak için Firebase Authentication belirteçleri</li>
              <li>Cihazınıza anlık bildirim göndermek için Firebase Cloud Messaging (FCM) cihaz belirteci</li>
              <li>Firebase üzerinden temel çökme ve teşhis kayıtları (çökme raporlarına kimlik belirleyici kişisel veri dahil edilmez)</li>
            </ul>
            <p>Konum, kişiler, kamera, mikrofon veya açıkça kullandığınız özellik için gerekli olmayan başka cihaz izinlerini toplamayız.</p>
          </section>

          <section id="how-we-use">
            <h2>3. Verilerinizi Nasıl Kullanırız</h2>
            <p>Topladığımız verileri şu amaçlarla kullanırız:</p>
            <ul>
              <li><strong>Hizmeti sunmak için:</strong> Hesabınızı doğrulamak, aile görev/rutinlerini cihazlar arasında senkronize etmek ve bildirim göndermek.</li>
              <li><strong>Uygulamayı iyileştirmek için:</strong> Anonim çökme raporları ve kullanım kalıpları ile hataları tespit etmek ve iyileştirmelere öncelik vermek.</li>
              <li><strong>Sizinle iletişim için:</strong> Parola sıfırlama veya güvenlik bildirimi gibi hesapla ilgili işlemsel e-postalar göndermek.</li>
              <li><strong>Koşulları uygulamak için:</strong> Bildirilen kötüye kullanım veya ihlalleri incelemek.</li>
            </ul>
            <p>Verilerinizi reklamcılık, profil çıkarma veya burada belirtilenler dışında bir amaçla kullanmayız.</p>
          </section>

          <section id="data-sharing">
            <h2>4. Veri Paylaşımı</h2>
            <p>Kişisel verilerinizi satmaz, kiralamaz veya takas etmeyiz. Veriler yalnızca aşağıdaki sınırlı durumlarda paylaşılır:</p>
            <p><strong>Hizmet sağlayıcılar</strong></p>
            <p>Uygulama altyapısı için Google Firebase (Google LLC ürünü) kullanıyoruz:</p>
            <ul>
              <li><strong>Firebase Authentication</strong> — güvenli hesap yönetimi</li>
              <li><strong>Cloud Firestore</strong> — görev, rutin ve etkinlik veritabanı</li>
              <li><strong>Firebase Cloud Messaging (FCM)</strong> — anlık bildirim teslimi</li>
              <li><strong>Firebase Cloud Functions</strong> — görev ataması bildirimi gibi sunucu tarafı mantık</li>
            </ul>
            <p>Google, verileri adımıza veri işleyen sıfatıyla <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">Firebase Privacy and Security</a> koşulları kapsamında işler.</p>
            <p><strong>Aile grubu içinde</strong></p>
            <p>Aile grubuna eklediğiniz bilgiler (görevler, etkinlikler, rutinler, profil bilgileri) o aile grubunun üyeleri tarafından görülebilir.</p>
            <p><strong>Yasal zorunluluklar</strong></p>
            <p>Kanun, mahkeme kararı veya kamu otoritesi gerektirirse ya da kullanıcı güvenliği ve hakların korunması için gerekli olduğuna iyi niyetle inanırsak bilgi açıklayabiliriz.</p>
          </section>

          <section id="data-retention">
            <h2>5. Veri Saklama</h2>
            <p>Hesabınız aktif olduğu sürece hesap ve aile verilerinizi saklarız. Hesabınızı silerseniz kişisel verileriniz ve ilişkili aile içerikleri (görev, rutin, etkinlik) 30 gün içinde sistemlerimizden kalıcı olarak silinir. Yedeklerdeki veriler yedek döngülerine bağlı olarak en fazla 90 gün kalabilir.</p>
            <p>Aile grubunuzda aktif üyeler varsa, paylaşılan içerik (görevler, etkinlikler) hesabınız kaldırıldıktan sonra diğer üyeler tarafından görüntülenmeye devam edebilir.</p>
          </section>

          <section id="childrens-privacy">
            <h2>6. Çocukların Gizliliği (COPPA)</h2>
            <p>NestMind yetişkinler ve aileler için tasarlanmıştır. Uygulama, ebeveynlerin/vasilerin aile grubu içinde çocuk profilleri oluşturmasına izin verir. Çocuklar bağımsız hesap açmaz.</p>
            <p>Çocuk profilleri yalnızca ebeveyn/vasi tarafından girilen ad ve isteğe bağlı avatar bilgisini içerir. 13 yaş altı çocuklardan doğrulanabilir ebeveyn onayı olmadan doğrudan kişisel veri topladığımızı bilmiyoruz.</p>
            <p>13 yaş altı bir çocuğa ait verinin uygun onay olmadan toplandığını düşünüyorsanız lütfen <a href="mailto:nestmind-support@gmail.com">nestmind-support@gmail.com</a> adresinden bize yazın.</p>
          </section>

          <section id="your-rights">
            <h2>7. Haklarınız</h2>
            <p>Bulunduğunuz konuma bağlı olarak kişisel verilerinize ilişkin erişim, düzeltme ve silme gibi haklara sahip olabilirsiniz. Konumdan bağımsız olarak şu talepleri destekleriz:</p>
            <ul>
              <li><strong>Erişim:</strong> Hesabınıza bağlı verileri uygulama içinde görüntüleyebilirsiniz.</li>
              <li><strong>Düzeltme:</strong> Görünen ad, e-posta ve profil fotoğrafını güncelleyebilirsiniz.</li>
              <li><strong>Silme:</strong> Hesap ve ilişkili verileri uygulama içinden (Ayarlar › Hesap › Hesabı Sil) silebilirsiniz.</li>
              <li><strong>Veri taşınabilirliği:</strong> Talep etmeniz halinde verilerinizi makinece okunabilir formatta paylaşırız.</li>
              <li><strong>GDPR (EEA/BK):</strong> İşlemeye itiraz etme, kısıtlama isteme ve denetim otoritesine şikayet hakkı.</li>
              <li><strong>CCPA (California):</strong> Kişisel bilgi satmıyoruz; hangi verileri topladığımızı öğrenme ve silme talep etme hakkı.</li>
            </ul>
            <p>Haklarınızı kullanmak için <a href="mailto:nestmind-support@gmail.com">nestmind-support@gmail.com</a> adresinden bize ulaşın. Genellikle 30 gün içinde yanıtlarız.</p>
          </section>

          <section id="security">
            <h2>8. Güvenlik</h2>
            <p>Verilerinizi korumak için makul teknik ve idari önlemler uygularız. Veri aktarımı HTTPS/TLS ile yapılır. Dinlenimdeki veriler Google Firebase altyapısında şifrelenir. Erişim, kullanıcıların yalnızca kendi hesap ve aile verilerine erişmesini sağlayan Firestore kurallarıyla sınırlandırılır.</p>
            <p>Hiçbir iletim veya depolama yöntemi %100 güvenli değildir. Ticari olarak makul güvenlik önlemleri uygulasak da mutlak güvenliği garanti edemeyiz.</p>
          </section>

          <section id="contact">
            <h2>9. İletişim</h2>
            <p>Bu Gizlilik Politikası hakkında sorularınız veya veri hakları talepleriniz için bizimle iletişime geçebilirsiniz:</p>
            <p><strong>NestMind App</strong><br>Email: <a href="mailto:nestmind-support@gmail.com">nestmind-support@gmail.com</a></p>
            <p>Gizlilik taleplerini ciddiyetle ele alır ve genellikle 5 iş günü içinde dönüş yaparız.</p>
          </section>

          <section id="changes">
            <h2>10. Bu Politikadaki Değişiklikler</h2>
            <p>Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Güncelleme olduğunda sayfanın üstündeki "Son güncelleme" tarihini değiştiririz. Önemli değişikliklerde uygulama içi bildirim veya e-posta ile bilgilendirme yaparız.</p>
          </section>
        `
      },
      es: {
        htmlLang: "es",
        title: "Política de Privacidad — NestMind",
        description: "Política de Privacidad de NestMind: cómo recopilamos, usamos y protegemos tus datos.",
        pageLabel: "Legal",
        pageTitle: "Política de Privacidad",
        pageMeta: "Fecha de entrada en vigor: 4 de abril de 2026 · Última actualización: abril de 2026",
        appStoreCta: "App Store",
        appStoreAria: "Descargar en App Store",
        footerPrivacy: "Política de Privacidad",
        footerTerms: "Términos de Uso",
        footerSupport: "Soporte",
        privacyHref: "privacy.html?lang=es",
        termsHref: "terms.html?lang=es",
        supportHref: "support.html",
        proseHtml: `
          <section id="introduction">
            <h2>1. Introducción</h2>
            <p>Bienvenido a NestMind. NestMind es una aplicación de coordinación familiar desarrollada y operada por un desarrollador individual ("nosotros", "nuestro"). Esta Política de Privacidad explica cómo recopilamos, usamos, almacenamos y protegemos la información cuando utilizas la aplicación iOS de NestMind ("la App").</p>
            <p>Al usar la App, aceptas las prácticas descritas en esta política. Si no estás de acuerdo, no utilices la App. Este texto está redactado en lenguaje claro para que sea fácil de entender.</p>
            <div class="callout">
              <strong>Nuestro compromiso:</strong> No vendemos tus datos personales. No mostramos anuncios. La información de tu familia se usa únicamente para prestar el servicio de NestMind.
            </div>
          </section>

          <section id="data-collected">
            <h2>2. Datos que recopilamos</h2>
            <p>Recopilamos solo los datos mínimos necesarios para prestar el servicio:</p>
            <p><strong>Información de cuenta</strong></p>
            <ul>
              <li>Dirección de correo electrónico (si te registras con email y contraseña)</li>
              <li>Nombre y correo de Apple ID (si usas "Iniciar sesión con Apple"; Apple puede proporcionar un correo relay anonimizado)</li>
              <li>Nombre visible que eliges para tu perfil</li>
              <li>Foto de perfil, si decides subirla</li>
            </ul>
            <p><strong>Datos de familia y de la app</strong></p>
            <ul>
              <li>Nombre de la familia y miembros que agregas</li>
              <li>Tareas creadas (título, descripción, asignado, fecha límite y estado)</li>
              <li>Rutinas y horarios recurrentes que configuras</li>
              <li>Eventos de calendario y recordatorios</li>
              <li>Perfiles infantiles (nombre y avatar opcional) agregados por padre/madre o tutor</li>
            </ul>
            <p><strong>Datos técnicos</strong></p>
            <ul>
              <li>Tokens de Firebase Authentication para identificar tu cuenta de forma segura</li>
              <li>Token de dispositivo de Firebase Cloud Messaging (FCM) para enviar notificaciones push</li>
              <li>Registros básicos de errores y diagnóstico mediante Firebase (sin datos personales identificables)</li>
            </ul>
            <p>No recopilamos ubicación, contactos, acceso a cámara, micrófono ni otros permisos del dispositivo, salvo los necesarios para una función que elijas usar.</p>
          </section>

          <section id="how-we-use">
            <h2>3. Cómo usamos tus datos</h2>
            <p>Utilizamos la información recopilada para:</p>
            <ul>
              <li><strong>Prestar el servicio:</strong> autenticar tu cuenta, sincronizar tareas/rutinas familiares y enviar notificaciones push.</li>
              <li><strong>Mejorar la App:</strong> usar reportes anónimos de fallos y patrones de uso para priorizar mejoras.</li>
              <li><strong>Comunicarnos contigo:</strong> enviar correos transaccionales de cuenta (por ejemplo, restablecimiento de contraseña y avisos de seguridad).</li>
              <li><strong>Aplicar nuestros términos:</strong> investigar abusos o infracciones reportadas.</li>
            </ul>
            <p>No usamos tus datos para publicidad, perfilado ni para fines distintos a los descritos aquí.</p>
          </section>

          <section id="data-sharing">
            <h2>4. Compartición de datos</h2>
            <p>No vendemos, alquilamos ni intercambiamos tus datos personales. Solo compartimos datos en circunstancias limitadas:</p>
            <p><strong>Proveedores de servicio</strong></p>
            <p>Usamos Google Firebase (producto de Google LLC) para la infraestructura de la App:</p>
            <ul>
              <li><strong>Firebase Authentication</strong> — gestión segura de cuentas</li>
              <li><strong>Cloud Firestore</strong> — base de datos de tareas, rutinas y eventos</li>
              <li><strong>Firebase Cloud Messaging (FCM)</strong> — entrega de notificaciones push</li>
              <li><strong>Firebase Cloud Functions</strong> — lógica del servidor, como enviar avisos al asignar tareas</li>
            </ul>
            <p>Google procesa estos datos como encargado de tratamiento en nuestro nombre, conforme a <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">Firebase Privacy and Security</a>.</p>
            <p><strong>Dentro de tu grupo familiar</strong></p>
            <p>La información que agregues al grupo familiar (tareas, eventos, rutinas y perfiles) será visible para los miembros de ese grupo.</p>
            <p><strong>Requisitos legales</strong></p>
            <p>Podemos revelar información cuando la ley, una orden judicial o una autoridad gubernamental lo exijan, o cuando sea necesario para proteger derechos, bienes o seguridad.</p>
          </section>

          <section id="data-retention">
            <h2>5. Conservación de datos</h2>
            <p>Conservamos los datos de tu cuenta y familia mientras la cuenta permanezca activa. Si eliminas tu cuenta, tus datos personales y el contenido asociado (tareas, rutinas, eventos) se eliminan de forma permanente en un plazo de 30 días. Las copias de respaldo pueden conservar datos hasta 90 días adicionales.</p>
            <p>Si hay otros miembros activos en tu grupo familiar, el contenido compartido puede seguir visible para ellos después de eliminar tu cuenta.</p>
          </section>

          <section id="childrens-privacy">
            <h2>6. Privacidad infantil (COPPA)</h2>
            <p>NestMind está diseñada para adultos y familias. La App permite que adultos creen perfiles infantiles dentro del grupo familiar. Los menores no crean cuentas propias ni usan el sistema de autenticación directamente.</p>
            <p>Los perfiles infantiles contienen solo nombre y avatar opcional, aportados por el padre/madre o tutor. No recopilamos de forma consciente datos personales directamente de menores de 13 años sin consentimiento verificable.</p>
            <p>Si crees que hemos recopilado información de un menor de 13 años sin el consentimiento adecuado, escríbenos a <a href="mailto:nestmind-support@gmail.com">nestmind-support@gmail.com</a>.</p>
          </section>

          <section id="your-rights">
            <h2>7. Tus derechos</h2>
            <p>Según tu ubicación, puedes tener derechos de acceso, corrección o eliminación de datos. En general, ofrecemos:</p>
            <ul>
              <li><strong>Acceso:</strong> puedes ver los datos de tu cuenta dentro de la App.</li>
              <li><strong>Corrección:</strong> puedes actualizar nombre visible, correo y foto de perfil.</li>
              <li><strong>Eliminación:</strong> puedes borrar tu cuenta y datos asociados desde la App (Ajustes › Cuenta › Eliminar cuenta).</li>
              <li><strong>Portabilidad:</strong> podemos entregar tus datos en formato legible por máquina si lo solicitas.</li>
              <li><strong>GDPR (UE/Reino Unido):</strong> derecho de oposición, limitación y reclamación ante la autoridad competente.</li>
              <li><strong>CCPA (California):</strong> no vendemos datos personales; puedes conocer qué datos recopilamos y solicitar su eliminación.</li>
            </ul>
            <p>Para ejercer estos derechos, contáctanos en <a href="mailto:nestmind-support@gmail.com">nestmind-support@gmail.com</a>. Respondemos normalmente en 30 días.</p>
          </section>

          <section id="security">
            <h2>8. Seguridad</h2>
            <p>Aplicamos medidas técnicas y organizativas razonables para proteger tus datos. Toda transmisión se realiza por HTTPS/TLS. Los datos en reposo se cifran dentro de la infraestructura de Firebase. El acceso se controla con reglas de seguridad de Firestore.</p>
            <p>Ningún método de transmisión o almacenamiento es 100% seguro. Aunque aplicamos medidas adecuadas, no podemos garantizar seguridad absoluta.</p>
          </section>

          <section id="contact">
            <h2>9. Contacto</h2>
            <p>Si tienes preguntas sobre esta Política de Privacidad o deseas ejercer tus derechos, contáctanos:</p>
            <p><strong>NestMind App</strong><br>Email: <a href="mailto:nestmind-support@gmail.com">nestmind-support@gmail.com</a></p>
            <p>Respondemos consultas de privacidad en aproximadamente 5 días hábiles.</p>
          </section>

          <section id="changes">
            <h2>10. Cambios en esta política</h2>
            <p>Podemos actualizar esta Política de Privacidad periódicamente. Cuando lo hagamos, actualizaremos la fecha de "Última actualización" en esta página y, para cambios importantes, te notificaremos por correo o mediante aviso en la App.</p>
          </section>
        `
      }
    },

    terms: {
      en: {
        htmlLang: "en",
        title: "Terms of Use — NestMind",
        description: "NestMind Terms of Use — the rules and conditions that govern your use of the NestMind iOS app.",
        pageLabel: "Legal",
        pageTitle: "Terms of Use",
        pageMeta: "Effective date: March 1, 2025 · Last updated: March 2025",
        appStoreCta: "App Store",
        appStoreAria: "Download on the App Store",
        footerPrivacy: "Privacy Policy",
        footerTerms: "Terms of Use",
        footerSupport: "Support",
        privacyHref: "privacy.html",
        termsHref: "terms.html",
        supportHref: "support.html"
      },
      tr: {
        htmlLang: "tr",
        title: "Kullanım Koşulları — NestMind",
        description: "NestMind Kullanım Koşulları — NestMind iOS uygulamasını kullanımınızı düzenleyen kurallar.",
        pageLabel: "Yasal",
        pageTitle: "Kullanım Koşulları",
        pageMeta: "Yürürlük tarihi: 1 Mart 2025 · Son güncelleme: Mart 2025",
        appStoreCta: "App Store",
        appStoreAria: "App Store'dan indir",
        footerPrivacy: "Gizlilik Politikası",
        footerTerms: "Kullanım Koşulları",
        footerSupport: "Destek",
        privacyHref: "privacy.html?lang=tr",
        termsHref: "terms.html?lang=tr",
        supportHref: "support.html",
        proseHtml: `
          <section id="acceptance">
            <h2>1. Koşulların Kabulü</h2>
            <p>NestMind'e hoş geldiniz. Bu Kullanım Koşulları ("Koşullar"), NestMind iOS uygulamasına ("Uygulama") erişiminizi ve kullanımınızı düzenleyen, sizinle NestMind App arasında bağlayıcı bir sözleşmedir.</p>
            <p>Uygulamayı indirerek, kurarak veya kullanarak bu Koşulları ve atıf yoluyla dahil edilen <a href="privacy.html?lang=tr">Gizlilik Politikamızı</a> okuduğunuzu ve kabul ettiğinizi beyan edersiniz.</p>
            <div class="callout"><strong>Özet:</strong> NestMind'i kullanmanız, bu kuralları kabul ettiğiniz anlamına gelir. Sorunuz varsa uygulamayı kullanmadan önce bize ulaşın.</div>
            <p>Hesap oluşturmak için en az 13 yaşında olmalısınız. 13-17 yaş arası kullanıcılar, ebeveyn/yasal vasi gözetimi ve onayı ile kullanabilir.</p>
          </section>

          <section id="description">
            <h2>2. Hizmetin Tanımı</h2>
            <p>NestMind, iOS'ta sunulan bir aile koordinasyon uygulamasıdır. Hanelerin ortak görev listeleri, tekrar eden rutinler ve takvim etkinlikleri oluşturmasını; sorumluluk atamasını ve bildirimlerle koordinasyon sağlamasını destekler.</p>
            <p>Uygulama App Store üzerinden sunulur ve iOS 16+ gerektirir. Gerçek zamanlı senkronizasyon için internet bağlantısı gereklidir. Kimlik doğrulama, veri depolama ve anlık bildirim altyapısında Firebase kullanılır.</p>
            <p>Uygulamadaki özellikleri, gerektiğinde ve uygun durumlarda önceden bilgilendirme yaparak değiştirme, askıya alma veya sonlandırma hakkımız saklıdır.</p>
          </section>

          <section id="account">
            <h2>3. Hesap Kaydı</h2>
            <p>NestMind kullanmak için e-posta/şifre veya Apple ile Giriş ile hesap oluşturmanız gerekir. Şunları kabul edersiniz:</p>
            <ul>
              <li>Doğru, güncel ve eksiksiz bilgi sağlamak</li>
              <li>Hesap bilgilerinizi korumak ve paylaşmamak</li>
              <li>Yetkisiz erişim şüphesi halinde <a href="mailto:nestmind-support@gmail.com">nestmind-support@gmail.com</a> adresine bildirmek</li>
              <li>Hesabınız altında gerçekleşen faaliyetlerden sorumlu olmak</li>
            </ul>
            <p>İhlal, yanıltıcı bilgi veya güvenlik riski halinde hesapları askıya alabilir veya sonlandırabiliriz.</p>
          </section>

          <section id="plans">
            <h2>4. Ücretsiz ve Pro Planlar</h2>
            <p><strong>Ücretsiz Plan</strong></p>
            <p>Yeni hesaplar ücretsiz plan ile başlar. Ücretsiz plan şunları içerir:</p>
            <ul>
              <li>Ücretsiz planda en fazla 2 ebeveyn hesabı</li>
              <li>Takvim ayı başına en fazla 30 görev oluşturma</li>
              <li>Takvim ayı başına en fazla 10 etkinlik oluşturma</li>
              <li>En fazla 1 kullanıcı oluşturmalı rutin</li>
              <li>En fazla 3 kullanıcı oluşturmalı şablon</li>
              <li>Raporlar sekmesi görünür; haftalık yapay zeka rapor üretimi yalnızca Pro'dadır</li>
            </ul>
            <p><strong>NestMind Pro</strong></p>
            <p>NestMind Pro, yukarıdaki limitleri kaldırır ve şu özellikleri açar: sınırsız ebeveyn erişimi, sınırsız aylık görev, sınırsız aylık etkinlik, ses komutuyla görev oluşturma ve haftalık yapay zeka raporları.</p>
            <p>NestMind Pro'ya abone olduğunuzda aşağıdakileri kabul edersiniz:</p>
            <ul>
              <li><strong>Faturalama:</strong> Ücretler satın alma sırasında onaylanan tutar üzerinden Apple ID hesabınıza yansıtılır.</li>
              <li><strong>Otomatik yenileme:</strong> Dönem bitiminden en az 24 saat önce iptal edilmezse abonelik otomatik yenilenir.</li>
              <li><strong>Ücretsiz deneme:</strong> Uygun yeni aboneler, seçili planlarda 7 günlük ücretsiz deneme alabilir.</li>
              <li>Deneme bitmeden en az 24 saat önce iptal edilmezse abonelik seçilen fiyatla yenilenir.</li>
              <li>Ücretsiz deneme uygunluğu Apple tarafından belirlenir ve genellikle abonelik grubu başına bir kez sunulur.</li>
              <li><strong>Yönetim/iptal:</strong> Aboneliği Apple ID ayarlarından yönetebilir veya iptal edebilirsiniz.</li>
              <li><strong>İade:</strong> Ödemeler Apple tarafından işlenir; iade talepleri Apple üzerinden yapılır.</li>
              <li><strong>Fiyat değişikliği:</strong> Fiyat değişiklikleri bir sonraki yenilemede uygulanır ve önceden bildirilir.</li>
            </ul>
            <p>Pro'dan Free'e düşüş, mevcut verileri silmez. Sonraki faturalama döneminde Free plan limitleri (ebeveyn, aylık görev/etkinlik, rutin/şablon ve Pro'ya özel özellik kısıtları) geçerli olur.</p>
          </section>

          <section id="acceptable-use">
            <h2>5. Kabul Edilebilir Kullanım</h2>
            <p>NestMind kişisel/ev içi koordinasyon için tasarlanmıştır. Uygulamayı yasalara ve bu Koşullara uygun kullanmayı kabul edersiniz. Şunları yapamazsınız:</p>
            <ul>
              <li>Ticari amaçla veya üçüncü taraf adına izinsiz kullanım</li>
              <li>Yetkisiz erişim girişimi</li>
              <li>Tersine mühendislik veya kaynak kodu çıkarma girişimi</li>
              <li>Hukuka aykırı, taciz edici veya tehdit içeren içerik iletme</li>
              <li>Abonelik limitlerini aşmaya yönelik manipülasyon</li>
              <li>Bot veya otomasyonla veri çekme/erişim</li>
            </ul>
          </section>

          <section id="children">
            <h2>6. Çocuk Profilleri ve Ebeveyn Sorumluluğu</h2>
            <p>NestMind, yetişkin kullanıcıların aile grubuna çocuk profili eklemesine izin verir. Çocuklar kendi giriş bilgileriyle bağımsız hesap oluşturmaz.</p>
            <p>Çocuk profili ekleyen yetişkin; gerekli yetkiye sahip olduğunu, profil kullanımından sorumlu olduğunu ve çocukla ilgili atamaları denetleyeceğini kabul eder.</p>
            <p>13 yaş altı çocuklardan doğrudan kişisel veri topladığımızı bilmiyoruz. Böyle bir durumdan şüpheleniyorsanız bize yazın: <a href="mailto:nestmind-support@gmail.com">nestmind-support@gmail.com</a>.</p>
          </section>

          <section id="ip">
            <h2>7. Fikri Mülkiyet</h2>
            <p>Uygulamanın tasarımı, kodu, metinleri, grafik ve ikonları dahil içeriği NestMind App'e aittir ve ilgili fikri mülkiyet mevzuatı ile korunur.</p>
            <p>Size, iOS cihazınızda kişisel ve ticari olmayan kullanım için sınırlı, devredilemez ve geri alınabilir lisans verilir.</p>
            <p><strong>Sizin içeriğiniz:</strong> Uygulamaya eklediğiniz içeriklerin mülkiyeti sizde kalır; bize yalnızca hizmeti sunmak için sınırlı kullanım izni verirsiniz.</p>
          </section>

          <section id="liability">
            <h2>8. Garanti Reddi ve Sorumluluğun Sınırlandırılması</h2>
            <p><strong>Garanti reddi:</strong> Uygulama "olduğu gibi" sunulur. Kanunen izin verilen ölçüde, ticarete elverişlilik veya belirli amaca uygunluk dahil açık/zımni garantiler verilmez.</p>
            <p><strong>Sorumluluk sınırı:</strong> Kanunen izin verilen ölçüde, dolaylı veya sonuçsal zararlar dahil olmak üzere çeşitli zarar türlerinden sorumlu olmayız.</p>
            <p>Toplam sorumluluğumuz, talep tarihinden önceki 12 ayda ödediğiniz toplam tutar veya 10 USD'den yüksek olanı ile sınırlıdır.</p>
          </section>

          <section id="termination">
            <h2>9. Sona Erdirme</h2>
            <p><strong>Sizin tarafınızdan:</strong> Uygulamayı kullanmayı bırakabilir ve hesabınızı istediğiniz zaman silebilirsiniz. Pro abonelik iptali Apple ID üzerinden ayrıca yapılmalıdır.</p>
            <p><strong>Bizim tarafımızdan:</strong> Koşul ihlali, güvenlik riski veya yasal zorunluluk halinde erişimi askıya alabilir ya da sonlandırabiliriz.</p>
            <p>Sona erme sonrası, niteliği gereği devam etmesi gereken hükümler yürürlükte kalır.</p>
          </section>

          <section id="changes">
            <h2>10. Koşullardaki Değişiklikler</h2>
            <p>Uygulama, uygulamalarımız veya mevzuattaki değişikliklere göre bu Koşulları güncelleyebiliriz. Güncellendiğinde üstteki tarih değiştirilir.</p>
            <p>Önemli değişiklikler için, uygulanabilir olduğunda yürürlüğe girmeden en az 14 gün önce uygulama içi bildirim veya e-posta göndeririz.</p>
          </section>

          <section id="governing-law">
            <h2>11. Uygulanacak Hukuk</h2>
            <p>Bu Koşullar, kanunlar ihtilafı ilkeleri gözetilmeksizin uygulanacak hukuka tabidir. Uyuşmazlıklar öncelikle iyi niyetli müzakere ile çözülmeye çalışılır.</p>
            <p>Müzakere ile çözüm sağlanamazsa, uyuşmazlık geliştiricinin bulunduğu yerdeki yetkili mahkemelerde görülür.</p>
            <p>AB kullanıcıları için zorunlu tüketici haklarını sınırlayan bir hüküm amaçlanmamıştır.</p>
          </section>

          <section id="contact">
            <h2>12. İletişim</h2>
            <p>Bu Koşullar hakkında soru veya geri bildiriminiz varsa bizimle iletişime geçin:</p>
            <p><strong>NestMind App</strong><br>Email: <a href="mailto:nestmind-support@gmail.com">nestmind-support@gmail.com</a></p>
            <p>Genellikle 5 iş günü içinde yanıt veririz.</p>
          </section>
        `
      },
      es: {
        htmlLang: "es",
        title: "Términos de Uso — NestMind",
        description: "Términos de Uso de NestMind: reglas y condiciones que rigen el uso de la app iOS de NestMind.",
        pageLabel: "Legal",
        pageTitle: "Términos de Uso",
        pageMeta: "Fecha de entrada en vigor: 1 de marzo de 2025 · Última actualización: marzo de 2025",
        appStoreCta: "App Store",
        appStoreAria: "Descargar en App Store",
        footerPrivacy: "Política de Privacidad",
        footerTerms: "Términos de Uso",
        footerSupport: "Soporte",
        privacyHref: "privacy.html?lang=es",
        termsHref: "terms.html?lang=es",
        supportHref: "support.html",
        proseHtml: `
          <section id="acceptance">
            <h2>1. Aceptación de los términos</h2>
            <p>Bienvenido a NestMind. Estos Términos de Uso ("Términos") constituyen un acuerdo legalmente vinculante entre tú y NestMind App respecto al acceso y uso de la aplicación iOS de NestMind ("la App").</p>
            <p>Al descargar, instalar o usar la App, confirmas que has leído y aceptas estos Términos y nuestra <a href="privacy.html?lang=es">Política de Privacidad</a>, incorporada por referencia.</p>
            <div class="callout"><strong>Resumen:</strong> Al usar NestMind, aceptas estas reglas. Si algo no está claro, contáctanos antes de usar la App.</div>
            <p>Debes tener al menos 13 años para crear una cuenta. Los usuarios de 13 a 17 años solo pueden usar la App con participación y consentimiento de padre/madre o tutor legal.</p>
          </section>

          <section id="description">
            <h2>2. Descripción del servicio</h2>
            <p>NestMind es una aplicación de coordinación familiar disponible exclusivamente en iOS. Permite crear y gestionar listas de tareas compartidas, rutinas recurrentes y eventos de calendario, asignar responsabilidades y coordinarse mediante notificaciones internas.</p>
            <p>La App se distribuye por App Store y requiere iOS 16 o superior. La funcionalidad principal necesita conexión a internet activa para sincronización en tiempo real. Utilizamos Firebase para autenticación, almacenamiento y notificaciones.</p>
            <p>Podemos modificar, suspender o discontinuar funciones de la App cuando sea necesario.</p>
          </section>

          <section id="account">
            <h2>3. Registro de cuenta</h2>
            <p>Para usar NestMind debes crear una cuenta con correo/contraseña o con "Iniciar sesión con Apple". Aceptas:</p>
            <ul>
              <li>Proporcionar información veraz, actual y completa</li>
              <li>Mantener seguras tus credenciales y no compartirlas</li>
              <li>Notificarnos accesos no autorizados en <a href="mailto:nestmind-support@gmail.com">nestmind-support@gmail.com</a></li>
              <li>Asumir responsabilidad por actividad bajo tu cuenta</li>
            </ul>
            <p>Podemos suspender o terminar cuentas comprometidas o que incumplan estos Términos.</p>
          </section>

          <section id="plans">
            <h2>4. Plan gratuito y plan Pro</h2>
            <p><strong>Plan gratuito</strong></p>
            <p>Las cuentas nuevas comienzan en el plan gratuito. Incluye:</p>
            <ul>
              <li>Hasta 2 cuentas parentales en el plan gratuito</li>
              <li>Hasta 30 tareas creadas por mes calendario</li>
              <li>Hasta 10 eventos creados por mes calendario</li>
              <li>Hasta 1 rutina creada por usuario</li>
              <li>Hasta 3 plantillas creadas por usuario</li>
              <li>La pestaña de reportes es visible, pero los reportes semanales con IA son exclusivos de Pro</li>
            </ul>
            <p><strong>NestMind Pro</strong></p>
            <p>NestMind Pro elimina los límites anteriores y desbloquea acceso parental ilimitado, tareas mensuales ilimitadas, eventos mensuales ilimitados, creación de tareas por comando de voz y reportes semanales con IA.</p>
            <p>Al suscribirte a NestMind Pro, aceptas lo siguiente:</p>
            <ul>
              <li><strong>Facturación:</strong> la suscripción se cobra a tu Apple ID al precio confirmado durante la compra.</li>
              <li><strong>Renovación automática:</strong> la suscripción se renueva automáticamente salvo cancelación al menos 24 horas antes del final del periodo.</li>
              <li><strong>Prueba gratuita:</strong> los nuevos suscriptores elegibles pueden recibir una prueba gratuita de 7 días en planes seleccionados.</li>
              <li>Si no se cancela al menos 24 horas antes de que termine la prueba, la suscripción se renueva al precio del plan elegido.</li>
              <li>La elegibilidad de la prueba gratuita la determina Apple y normalmente se concede una vez por grupo de suscripción.</li>
              <li><strong>Gestión/cancelación:</strong> puedes gestionar o cancelar en ajustes de Apple ID.</li>
              <li><strong>Reembolsos:</strong> Apple procesa las compras y aplica su política de reembolsos.</li>
              <li><strong>Cambios de precio:</strong> pueden aplicarse en la siguiente renovación con aviso previo.</li>
            </ul>
            <p>Pasar de Pro a Free no elimina datos existentes. En el siguiente ciclo de facturación se aplicarán los límites del plan gratuito (padres, tareas/eventos mensuales, rutina/plantillas y restricciones de funciones Pro).</p>
          </section>

          <section id="acceptable-use">
            <h2>5. Uso aceptable</h2>
            <p>NestMind está diseñada para coordinación personal y del hogar. Aceptas usar la App de forma legal y conforme a estos Términos. No puedes:</p>
            <ul>
              <li>Usar la App con fines comerciales sin autorización</li>
              <li>Intentar acceder sin permiso a sistemas o servidores</li>
              <li>Realizar ingeniería inversa o descompilación</li>
              <li>Transmitir contenido ilegal, amenazante o abusivo</li>
              <li>Intentar eludir límites de suscripción o acceder a funciones Pro sin suscripción válida</li>
              <li>Usar bots o herramientas automáticas para scraping</li>
            </ul>
          </section>

          <section id="children">
            <h2>6. Perfiles infantiles y responsabilidad parental</h2>
            <p>NestMind permite que usuarios adultos agreguen perfiles infantiles al grupo familiar. Los menores no crean credenciales propias ni operan la App de forma independiente.</p>
            <p>Al agregar un perfil infantil, el titular adulto confirma que tiene autoridad para hacerlo y asume la responsabilidad por el uso vinculado a ese perfil.</p>
            <p>No recopilamos intencionadamente datos personales directamente de menores de 13 años. Si detectas un caso, contáctanos: <a href="mailto:nestmind-support@gmail.com">nestmind-support@gmail.com</a>.</p>
          </section>

          <section id="ip">
            <h2>7. Propiedad intelectual</h2>
            <p>La App (diseño, código, textos, gráficos, iconos y demás contenido) pertenece a NestMind App y está protegida por la legislación de propiedad intelectual aplicable.</p>
            <p>Te otorgamos una licencia limitada, no exclusiva, no transferible y revocable para usar la App en tu dispositivo iOS para uso personal y no comercial.</p>
            <p><strong>Tu contenido:</strong> conservas la titularidad de lo que creas en la App; nos concedes una licencia limitada para almacenar, procesar y mostrar ese contenido con el fin de prestar el servicio.</p>
          </section>

          <section id="liability">
            <h2>8. Exención de garantías y limitación de responsabilidad</h2>
            <p><strong>Exención de garantías:</strong> la App se ofrece "tal cual" y "según disponibilidad", sin garantías de ningún tipo.</p>
            <p><strong>Limitación de responsabilidad:</strong> en la medida permitida por la ley, no seremos responsables por daños indirectos, incidentales, especiales o consecuentes.</p>
            <p>Nuestra responsabilidad total agregada por todas las reclamaciones no excederá el mayor de: (a) el total pagado por ti en los 12 meses previos a la reclamación, o (b) 10 USD.</p>
          </section>

          <section id="termination">
            <h2>9. Terminación</h2>
            <p><strong>Por tu parte:</strong> puedes dejar de usar la App y eliminar tu cuenta en cualquier momento. La cancelación de suscripción Pro se hace por separado en Apple ID.</p>
            <p><strong>Por nuestra parte:</strong> podemos suspender o terminar el acceso por incumplimiento, riesgo de seguridad o exigencia legal.</p>
            <p>Tras la terminación, seguirán vigentes las disposiciones que por su naturaleza deban sobrevivir.</p>
          </section>

          <section id="changes">
            <h2>10. Cambios en los términos</h2>
            <p>Podemos actualizar estos Términos para reflejar cambios en la App, en nuestras prácticas o en la legislación. Cuando ocurra, actualizaremos la fecha de "Última actualización".</p>
            <p>Para cambios materiales, notificaremos por correo o aviso en la App con antelación razonable (normalmente al menos 14 días cuando sea posible).</p>
          </section>

          <section id="governing-law">
            <h2>11. Ley aplicable</h2>
            <p>Estos Términos se rigen por la legislación aplicable, sin perjuicio de principios de conflicto de leyes. Las disputas se intentarán resolver primero mediante negociación de buena fe.</p>
            <p>Si no se resuelven, se someterán a la jurisdicción exclusiva de los tribunales competentes del lugar del desarrollador.</p>
            <p>Nada de estos Términos limita derechos de consumo obligatorios aplicables en tu lugar de residencia.</p>
          </section>

          <section id="contact">
            <h2>12. Contacto</h2>
            <p>Si tienes dudas, comentarios o reclamaciones sobre estos Términos, contáctanos:</p>
            <p><strong>NestMind App</strong><br>Email: <a href="mailto:nestmind-support@gmail.com">nestmind-support@gmail.com</a></p>
            <p>Intentamos responder todas las consultas en 5 días hábiles.</p>
          </section>
        `
      }
    }
  };

  function readLang() {
    const params = new URLSearchParams(window.location.search);
    const lang = (params.get("lang") || "en").toLowerCase();
    return ["en", "tr", "es"].includes(lang) ? lang : "en";
  }

  function setText(selector, value) {
    const el = document.querySelector(selector);
    if (el && typeof value === "string") {
      el.textContent = value;
    }
  }

  function setLink(selector, label, href) {
    const el = document.querySelector(selector);
    if (!el) return;
    if (typeof label === "string") {
      el.textContent = label;
    }
    if (typeof href === "string") {
      el.setAttribute("href", href);
    }
  }

  window.applyLegalLanguage = function applyLegalLanguage(pageKey) {
    const lang = readLang();
    const pageConfig = legalTranslations[pageKey];
    if (!pageConfig) return;

    const basePath = window.location.pathname.split("/").pop() || "";
    document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
      const buttonLang = btn.getAttribute("data-lang-btn");
      btn.classList.toggle("active", buttonLang === lang);
      btn.setAttribute("href", `${basePath}?lang=${buttonLang}`);
    });

    const t = pageConfig[lang] || pageConfig.en;
    document.documentElement.lang = t.htmlLang || lang;

    if (typeof t.title === "string") {
      document.title = t.title;
    }

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && typeof t.description === "string") {
      metaDescription.setAttribute("content", t.description);
    }

    setText('[data-i18n="page-label"]', t.pageLabel);
    setText('[data-i18n="page-title"]', t.pageTitle);
    setText('[data-i18n="page-meta"]', t.pageMeta);

    const appStoreCta = document.querySelector('[data-i18n="app-store-cta"]');
    if (appStoreCta) {
      const ctaSpan = appStoreCta.querySelector("span");
      if (ctaSpan && typeof t.appStoreCta === "string") {
        ctaSpan.textContent = t.appStoreCta;
      }
      if (typeof t.appStoreAria === "string") {
        appStoreCta.setAttribute("aria-label", t.appStoreAria);
      }
    }

    if (typeof t.proseHtml === "string") {
      const prose = document.querySelector(".prose");
      if (prose) {
        prose.innerHTML = t.proseHtml;
      }
    }

    setLink('[data-i18n="footer-privacy"]', t.footerPrivacy, t.privacyHref);
    setLink('[data-i18n="footer-terms"]', t.footerTerms, t.termsHref);
    setLink('[data-i18n="footer-support"]', t.footerSupport, t.supportHref || "support.html");
  };
})();
