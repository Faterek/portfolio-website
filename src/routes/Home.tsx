import { Trans, useTransContext } from '@mbarzda/solid-i18next';

import NavBar from '../components/NavBar';

export default function Home() {
    const [t] = useTransContext();

    const alts = {
        get home() {
            return t('home');
        },
        get skills() {
            return t('skills');
        },
        get aboutMe() {
            return t('aboutMe');
        },
        get contact() {
            return t('contact');
        },
        get sourceCode() {
            return t('sourceCode');
        },
    };
    return (
        <>
            <NavBar>
                <button title={alts.home} class='aspect-square w-14 p-2'>
                    <img class='w-full h-full' src='/home.svg' />
                </button>
                <button title={alts.aboutMe} class='aspect-square w-14 p-2'>
                    <img class='w-full h-full' src='/about-me.svg' />
                </button>
                <button title={alts.skills} class='aspect-square w-14 p-2'>
                    <img class='w-full h-full' src='/skills.svg' />
                </button>
                <button title={alts.contact} class='aspect-square w-14 p-2'>
                    <img class='w-full h-full' src='/contact.svg' />
                </button>
            </NavBar>
            <div id='paralax-wrapper'>
                <div id='paralax-bg-container'>
                    <img src='/paralax-bg-sky.svg' id='paralax-bg-sky' class='paralax-bg' />
                    <img src='/paralax-bg-mount4.svg' id='paralax-bg-mount4' class='paralax-bg' />
                    <h1 id='paralax-text'>
                        <Trans key='welcome' />
                    </h1>
                    <img src='/paralax-bg-mount3.svg' id='paralax-bg-mount3' class='paralax-bg' />
                    <img src='/paralax-bg-mount2.svg' id='paralax-bg-mount2' class='paralax-bg' />
                    <img src='/paralax-bg-mount1.svg' id='paralax-bg-mount1' class='paralax-bg' />
                </div>
                <div class='bg-[#170850] h-full'>
                    <div class='mx-[12.5%] py-16'>
                        <p>Hello world!</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
                            itaque, sint architecto consectetur magni sapiente ipsum quae doloribus
                            optio autem maiores. Aliquam suscipit ut nulla nostrum earum dolor cum
                            nesciunt. Quidem, quas voluptatum quia expedita praesentium nam laborum
                            magnam dolorum ipsum cumque odit veniam accusamus delectus fugit
                            temporibus mollitia corrupti nihil enim repellat porro deleniti? Quo
                            assumenda illum eius impedit! Amet similique aspernatur illum tempora
                            atque consequatur animi reprehenderit aut laboriosam! Non minima
                            deleniti aperiam soluta cupiditate. Eius ad tenetur aspernatur fugiat
                            libero harum nam hic modi exercitationem cupiditate. Voluptate?
                            Veritatis molestias veniam perspiciatis maiores tempore similique
                            deleniti aperiam praesentium animi dolores nihil quas, minima sint nulla
                            repellat suscipit sit maxime earum quis! Eaque ducimus libero inventore
                            aspernatur, molestias alias. Nam similique alias laudantium corporis
                            debitis laborum enim natus facere veritatis a ut doloremque recusandae
                            accusantium exercitationem eius, deserunt et ea voluptatibus! Sequi
                            aperiam placeat incidunt a, nam magnam! Ex. Quod veniam et voluptas
                            omnis sed! Tempore modi officia obcaecati, quaerat eligendi iusto
                            molestiae dignissimos, debitis quisquam corporis, rem quibusdam
                            veritatis? Nemo voluptatem amet possimus voluptate veritatis voluptatum
                            dolores nihil? Cumque eum quo omnis deleniti est voluptatem corrupti
                            libero corporis vitae quibusdam distinctio earum eaque laborum placeat
                            unde at possimus fugiat maiores, autem id temporibus ullam beatae
                            accusamus! Beatae, iure! Magni eveniet laudantium aliquid eius dicta
                            quod et eligendi minus. Consequuntur, error ipsum repellendus
                            consequatur iste rerum et maxime architecto consectetur asperiores
                            veritatis saepe pariatur id deserunt ducimus illo. A? Rerum illum fugiat
                            quisquam nesciunt veritatis accusamus necessitatibus, doloribus dolorem
                            incidunt sapiente architecto eum, consectetur reiciendis repellat?
                            Dolorem, odio, cum voluptas assumenda recusandae nisi eveniet impedit
                            doloribus distinctio saepe asperiores? Doloribus nobis voluptates,
                            autem, incidunt fugit voluptatibus possimus ea reiciendis sequi id
                            libero illo iste aliquid provident natus molestiae odit eum minus, vel
                            distinctio in fugiat? Numquam possimus quo nostrum. Aut nostrum,
                            delectus quae blanditiis ipsam eaque quo nihil harum quod non hic ipsum
                            atque provident quaerat eos explicabo animi error incidunt corrupti
                            asperiores perferendis assumenda? Aut eos magnam animi. Aspernatur
                            facilis quo, nemo fugit placeat voluptatibus, quisquam aliquam similique
                            dolorum molestiae veritatis quae nulla assumenda. Totam, hic quaerat
                            vitae ratione repellendus porro possimus exercitationem consectetur qui
                            repellat error sit. Doloribus maxime possimus ad nobis, a, et nisi
                            aspernatur qui optio dolor natus amet unde, rem odio fugit dolorum sint
                            omnis eum impedit error accusamus quae. Nam soluta nulla fuga. Atque
                            iste reprehenderit natus asperiores laudantium ut doloribus ea aliquid
                            nam laboriosam dolorum, quaerat dolores voluptatibus sapiente nesciunt
                            facilis consectetur commodi vero alias eius et possimus. Accusamus
                            maxime velit facere! Laboriosam rem aspernatur mollitia accusantium,
                            error nobis similique tenetur non laborum nostrum perspiciatis, aliquam
                            esse provident accusamus laudantium quas repudiandae. Ducimus nam a
                            provident magnam soluta illum aspernatur impedit earum? Pariatur labore
                            nesciunt veritatis inventore soluta quod fugit, natus illum aspernatur
                            magni nisi doloribus exercitationem dolorem ad voluptate dignissimos
                            corporis officia odit quas consequatur? Qui nemo hic sunt blanditiis
                            nisi. Nam officia, reiciendis non nostrum ad esse praesentium provident
                            laboriosam aspernatur aliquam ipsam nulla similique perspiciatis aliquid
                            dignissimos pariatur iusto quis harum accusamus velit! Ipsam magni aut
                            porro dignissimos unde. Labore facilis, aperiam adipisci harum dolores
                            repellat! Cum sequi nostrum sed eius laudantium vel quisquam. Temporibus
                            eum eveniet, quas expedita repudiandae, aut odit error necessitatibus
                            est asperiores eius molestiae quam. Nobis id eveniet quidem, quia
                            deserunt voluptates sequi dolorem repellendus dolor assumenda iure
                            maiores vitae omnis earum necessitatibus corrupti sit, obcaecati
                            laudantium ducimus quaerat perspiciatis? Architecto nostrum ullam eaque
                            iste. Excepturi rerum blanditiis, amet porro dignissimos commodi maxime
                            sint corporis id! Eligendi illum eos aliquid similique nesciunt.
                            Voluptatem deserunt nemo recusandae sequi ratione praesentium explicabo,
                            suscipit, expedita facilis quaerat voluptates! Perspiciatis
                            reprehenderit mollitia at adipisci natus delectus a consequuntur
                            doloremque quos quaerat? Laboriosam totam blanditiis ad, possimus
                            voluptatibus soluta ratione dolorem aperiam est, voluptate quod itaque,
                            beatae culpa obcaecati necessitatibus? Id quia dolores eveniet expedita
                            et sapiente beatae consequatur consequuntur, temporibus repellat tempore
                            reiciendis dolor impedit officia deserunt quibusdam ex sit eum? Itaque
                            possimus hic ullam magni id esse error. Molestiae suscipit commodi
                            labore, sit dolorum non aliquid dolor corporis, totam tempora
                            exercitationem nisi ratione tempore quibusdam. Recusandae iste quod
                            animi, corrupti magni voluptatibus, laudantium facilis voluptates
                            necessitatibus in temporibus. Iste quo odit, dicta aliquid nesciunt
                            veniam laborum! Distinctio quisquam maiores deserunt dolore doloremque
                            ab nemo tenetur quasi rerum ipsam officiis nostrum, modi, earum vel nam
                            eligendi, itaque sint quis. Modi tempore quae, sint nam odit autem nemo
                            minus cupiditate voluptatum iste nulla optio officiis asperiores,
                            tempora a esse incidunt laboriosam error explicabo. Odio voluptate
                            sapiente iure accusantium voluptatibus ad? Repellendus, reiciendis quis!
                            Porro, repudiandae fugit ducimus ut ex iure quis assumenda provident
                            aperiam obcaecati accusamus, voluptatibus dicta ea? Explicabo nobis
                            soluta nemo ea sapiente culpa dolorem, quos quae quaerat. Doloremque
                            quas et, quasi error similique necessitatibus esse delectus est deleniti
                            possimus rem hic veniam repellat officiis saepe itaque ratione suscipit
                            nulla maxime repellendus aperiam deserunt? Minus obcaecati in mollitia?
                            Esse maxime beatae dolores quod quia ipsum veniam, laudantium similique
                            maiores velit. Perspiciatis, dicta possimus expedita facere autem quae
                            vel ullam facilis neque veritatis voluptate iste, quo exercitationem
                            pariatur vitae. Velit tenetur ab voluptas dolores voluptatum, voluptatem
                            laudantium accusamus? Tempore ex nesciunt iste, recusandae, ipsam quam
                            mollitia deserunt quia architecto delectus adipisci consequuntur optio
                            sapiente laborum dolore voluptatem tempora alias! Hic magnam molestiae
                            voluptas eum autem a suscipit sequi explicabo dolore architecto et,
                            aspernatur optio corrupti, impedit pariatur delectus incidunt officia
                            facere unde reiciendis ipsum maiores vitae necessitatibus. Cumque,
                            aliquid! Fugiat molestiae, voluptas magnam aliquid deserunt, itaque
                            asperiores sed tempore culpa rem at tempora reprehenderit saepe, magni
                            similique repellat quasi consectetur alias a reiciendis nihil ipsum
                            assumenda aut? Obcaecati, quasi. Alias doloribus dolores, id inventore
                            soluta ut nulla necessitatibus. Sequi, unde facere neque ipsam expedita
                            quo impedit necessitatibus? Rerum, enim perferendis? Fugiat velit
                            consequuntur odio eum quibusdam assumenda adipisci iusto? Quos explicabo
                            error enim voluptatem aspernatur, fuga necessitatibus odit consequuntur
                            alias aut quo? Accusantium distinctio, minima odio minus quo sequi
                            magnam accusamus mollitia, pariatur cupiditate doloremque delectus
                            eligendi deserunt repellat? Iure provident saepe explicabo. Provident
                            recusandae quisquam maiores optio odio? Reiciendis iure aperiam, earum
                            aliquid beatae nam qui laudantium quos, placeat itaque provident vero
                            magnam reprehenderit, doloremque harum perferendis ut. Veniam ratione
                            doloribus, modi fuga neque a ullam iure id labore officia rem blanditiis
                            autem praesentium, dignissimos accusantium molestiae eius perferendis
                            perspiciatis dolorum fugiat dolores libero voluptatem ut quasi! Quidem!
                            Quisquam consectetur nulla quibusdam, laudantium assumenda incidunt, eum
                            corrupti enim, totam aperiam reprehenderit sunt possimus illum fugit?
                            Molestias fuga dolorem quisquam quae libero totam quam, sint itaque iste
                            ex laborum. Veniam magni cumque labore doloribus tempora unde, at
                            recusandae veritatis fugit, accusamus numquam quidem itaque alias?
                            Voluptatem quidem omnis, impedit quia iste nam soluta dolorum non nobis.
                            Debitis, cupiditate similique? Assumenda laboriosam, nulla minima ea
                            dolorum nostrum cum aperiam sapiente debitis, quae non atque suscipit
                            eos sed corrupti labore? Tempore deserunt corrupti dolor beatae
                            provident accusantium illum accusamus labore ipsum. Similique maiores
                            minus explicabo alias incidunt, magnam, repellendus quibusdam iste
                            aspernatur eos itaque totam molestiae nulla, sed cupiditate ex
                            architecto eligendi provident quos autem. Minima dicta optio numquam
                            nobis voluptates? Ipsum iure pariatur labore eligendi beatae veritatis
                            inventore, magnam porro cupiditate sed. Delectus iure soluta, fugiat
                            architecto, quae doloremque ipsum at consectetur libero, quo vitae quas.
                            Dignissimos molestias qui quae! Quod ea sunt dignissimos iusto
                            necessitatibus, suscipit nostrum dolor laudantium quas cum molestiae
                            tenetur consequuntur explicabo reprehenderit itaque perferendis et
                            cumque ullam rerum omnis, sed unde, eveniet aperiam at? Velit.
                            Necessitatibus quis in iste similique dolorem inventore odit sed dolorum
                            hic, vero libero iusto distinctio aspernatur voluptatem? Quis accusamus
                            cupiditate, quisquam in amet ullam sit sint doloribus alias, nostrum
                            commodi. Quia exercitationem sapiente sit error dolorem corporis nam
                            doloremque, harum sequi laudantium in fugit temporibus nulla deserunt
                            iusto dicta rem eos atque laborum et, recusandae repellat. Nostrum a
                            error dolores. Reiciendis a voluptas, corporis id officia numquam quo
                            quasi at accusantium, maiores animi sapiente. Quisquam, distinctio, hic
                            suscipit, corrupti fuga aliquid recusandae doloremque tenetur voluptatum
                            esse voluptate pariatur animi reiciendis. Saepe aliquam veritatis
                            consequatur amet eum fuga assumenda repellat voluptatem et temporibus
                            quo architecto placeat dolorum molestias doloremque laborum praesentium,
                            sapiente culpa qui. Facilis, quibusdam ipsum aspernatur nam numquam
                            sint. Asperiores pariatur facilis quis sit commodi nostrum blanditiis
                            minus inventore quas. Error eligendi saepe ut temporibus voluptate
                            officia. Hic nihil quos eum necessitatibus nobis ut ratione enim nisi
                            neque cum? Dignissimos voluptatibus soluta hic cum perferendis, ullam
                            sequi non accusantium sed fugiat velit, tempora veniam quam saepe.
                            Corporis, veniam! Architecto error nulla dolores, ratione quasi
                            repellendus doloremque. Soluta, perspiciatis autem? Dolores reiciendis
                            velit est, optio quod aut laboriosam labore nostrum aspernatur corrupti
                            quis fugit totam possimus consectetur vero illum sit doloribus ab
                            laudantium natus ullam error! Ad natus vero atque? In, temporibus.
                            Aliquid sunt suscipit modi pariatur? Perferendis, rem veritatis totam
                            quaerat tempore quisquam. Laborum harum veritatis nam temporibus dicta,
                            perferendis eligendi, optio minima itaque sequi dolore, ut neque quam.
                            Inventore excepturi officiis tempora dolor eum sequi totam maxime
                            mollitia ipsum? Quam tempora numquam vero doloribus sunt nostrum minima
                            non repellat perspiciatis dolores accusantium ad nulla deserunt
                            blanditiis, recusandae quod? A voluptatem amet ipsam dolores dolor natus
                            vel, quibusdam beatae? Laboriosam aliquid ipsam soluta nihil rem
                            corrupti natus. Rerum, impedit earum fugiat tempore atque fugit. Maiores
                            deleniti sequi perferendis tempora! Nisi ea repellendus minima vel ipsa
                            illo unde facere cumque maxime, commodi quis similique nobis quod fugit
                            eius. Officia provident molestias qui nisi dolore explicabo ratione
                            voluptate, debitis quaerat assumenda. Consectetur rem, assumenda
                            explicabo dolorem sequi iusto ut deserunt, quas magnam nostrum suscipit.
                            Temporibus eum dignissimos excepturi, expedita quidem ratione voluptas
                            atque magnam beatae cupiditate tempora quas harum nesciunt? Laborum.
                            Officia, vitae sed dolorum accusamus expedita minus error explicabo et
                            tenetur iusto, similique, id sapiente odio! Quas laborum illo in
                            repudiandae? Perferendis laborum esse nihil odit, id quasi beatae
                            aliquid! Modi molestias minima in necessitatibus pariatur fugit quo
                            accusantium ea, impedit molestiae, sapiente harum sit voluptatem
                            voluptates voluptas, dicta expedita quas numquam dolorem magni
                            architecto. Consectetur beatae deserunt iure vel? Deleniti facere
                            tenetur accusantium repudiandae quisquam quibusdam quas laborum earum
                            fugiat amet officia iusto, illum, ad cupiditate pariatur laudantium quae
                            fugit sint adipisci in veniam laboriosam. Praesentium obcaecati
                            cupiditate incidunt. Impedit, eveniet eos fugit nobis facere ullam
                            inventore enim molestiae maiores odit voluptas obcaecati cupiditate
                            dicta assumenda exercitationem sapiente neque numquam magnam sunt
                            officia. Iste at ad eos deleniti temporibus! Animi voluptatem quia
                            accusamus excepturi explicabo dolore dolorem! Ut porro provident
                            eligendi architecto, repudiandae accusantium aliquam odit neque quasi
                            eius esse aspernatur eos perspiciatis repellat ipsam facilis similique
                            error tenetur. Fugiat itaque omnis molestias placeat nam ipsum deleniti
                            odit, expedita accusamus modi, amet illo provident nesciunt vero nihil
                            ducimus possimus iure deserunt dolorum nobis vitae voluptatem dolor eos.
                            Id, nisi? Sit ipsum quis itaque, consectetur at est molestiae sapiente
                            vitae distinctio impedit cum quae ullam necessitatibus officia
                            perferendis odio minus ab modi labore et aliquid ducimus! Iure, ducimus?
                            Quia, beatae. Alias laboriosam quae vel? Ipsa repellat, nulla deserunt
                            porro at facere itaque incidunt dolorem minus aliquam, quas cupiditate
                            dicta veniam doloremque suscipit, ullam fuga eaque maiores. Autem
                            commodi explicabo inventore. Recusandae vitae harum ipsam necessitatibus
                            eveniet veniam totam doloribus delectus veritatis ex labore error ipsum
                            culpa corporis iusto accusamus hic molestias perferendis corrupti
                            numquam dolores, nobis a placeat. Ex, aperiam. Possimus quos
                            voluptatibus, hic ratione quibusdam ipsam voluptates sapiente eaque iste
                            a dicta inventore. Exercitationem pariatur ipsam perferendis?
                            Accusantium enim veniam id quas odio facilis hic reiciendis inventore
                            libero. Ipsum. Illo, voluptas voluptates. Reiciendis eaque quidem sequi
                            ab eum, aliquid enim repellendus dolorum vero ex eos eligendi placeat
                            quaerat similique assumenda unde! Voluptatem nihil nemo et est,
                            necessitatibus voluptatum neque?
                        </p>
                    </div>
                    <footer class='bg-[#10101099]/60 flex flex-row w-full'>
                        <div class='w-full flex flex-row justify-center gap-8 p-2 ml-14'>
                            <p>&copy; Seweryn Fater 2023</p>
                            <p>
                                &copy; Github Icon by&nbsp;
                                <a
                                    class='font-bold'
                                    target='_blank'
                                    href='https://www.svgrepo.com/svg/325237/github-outline'
                                >
                                    iconoir
                                </a>
                            </p>
                        </div>
                        <button title={alts.sourceCode} class='px-4'>
                            <a target='_blank' href='https://github.com/Faterek/portfolio-website'>
                                <img class='w-6' src='/github.svg' alt='' />
                            </a>
                        </button>
                    </footer>
                </div>
            </div>
        </>
    );
}
