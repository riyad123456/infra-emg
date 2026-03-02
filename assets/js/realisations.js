/**
 * Realisations Page Logic - File-System Based Content Management
 */

const projectData = {
    VRD: {
        title: "Voirie et Réseaux Divers (VRD)",
        desc: "Études de dédoublement, aménagements urbains stratégiques (RN 16) et pilotage technique de complexes industriels.",
        projects: [
            { title: "RN 1 -traversée de Zemamra", client: "Direction Provinciale d'ElJadida", desc: "Étude des travaux de dédoublement au niveau de la traversée de Khemis Zmamra sur 3,8 km.", img: "assets/images/ingenierie/vrd/dedoublement-rn1-khemis-zmamra.jpg" },
            { title: "RN 16 - traversée de Jnane Niche", client: "Direction Provinciale de Chefchaouen", desc: "Projet d'exécution des travaux d'aménagement de la traversée de centre (PK 137 au PK 210).", img: "assets/images/ingenierie/vrd/rn16-traversee-jnane-niche.jpg" },
            { title: "RN 16 - traversée de Aargoub", client: "Direction Provinciale de Chefchaouen", desc: "Projet d'exécution des travaux d'aménagement de la traversée du centre (PK 137 au PK 210).", img: "assets/images/ingenierie/vrd/rn16-traversee-aargoub.jpg" },
            { title: "RN 16 - traversée de Stehat", client: "Direction Provinciale de Chefchaouen", desc: "Projet d'exécution des travaux d'aménagement de la traversée du centre (PK 137 au PK 210).", img: "assets/images/ingenierie/vrd/rn16-traversee-stehat.jpg" },
            { title: "RN 16 - traversée de Sidi Yahya Aarab", client: "Direction Provinciale de Chefchaouen", desc: "Projet d'exécution des travaux d'aménagement de la traversée du centre (PK 137 au PK 210).", img: "assets/images/ingenierie/vrd/rn16-traversee-sidi-yahya-aarab.jpg" },
            { title: "RN 16 - traversée de Chmaala", client: "Direction Provinciale de Chefchaouen", desc: "Projet d'exécution des travaux d'aménagement de la traversée du centre (PK 137 au PK 210).", img: "assets/images/ingenierie/vrd/rn16-traversee-chmaala.jpg" },
            { title: "RN 16 - traversée de Azenti", client: "Direction Provinciale de Chefchaouen", desc: "Projet d'exécution traversée du centre (PK 137 au PK 210).", img: "assets/images/ingenierie/vrd/rn16-traversee-azenti.jpg" },
            { title: "Cimenterie Tétouan 2", client: "Lafarge Maroc", desc: "Pilotage et coordination des travaux de Génie Civil industriel et de VRD de l'usine Tétouan 2", img: "assets/images/ingenierie/vrd/cimenterie-tetouan-vrd.jpg" },
       ]
    },
    ROUTES: {
        title: "Études Routières",
        desc: "Conception, élargissement, renforcement et construction d'axes majeurs, routes rurales (PNRR II) et liaisons régionales.",
        projects: [
            { title: "RN 1 Zemamra", client: "Direction Provinciale d’El Jadida", desc: "Étude des travaux de dédoublement de la RN 1 au niveau de la traversée du centre de Zmamra sur une longueur de 3.8 Km", img: "assets/images/ingenierie/routes/dedoublement-rn1-pk78-82.jpg" },
            { title: "Route nationale n° 1", client: "Direction Provinciale de Larache", desc: "Etude de dédoublement de la RN1 du PK 78+700 au PK 82+600 sur 3.9 Km", img: "assets/images/ingenierie/routes/dedoublement-rn1-pk78-82.jpg" },
            { title: "Route Régionale n° 508", client: "Direction Provinciale de Driouech", desc: "Étude d'élargissement et de renforcement du PK 172+000 au PK 193+000", img: "assets/images/ingenierie/routes/elargissement-rr508.jpg" },
            { title: "Route Régionale n° 511", client: "Direction Provinciale de Driouech", desc: "Etude d’amélioration du niveau de service de la RR511 du PK 27 au PK 66 ( liaison Ain zohra – Driouch) ", img: "assets/images/ingenierie/routes/amelioration-rr511.jpg" },
            { title: "Route Provinciale n° 1702", client: "Direction Provinciale de Ouarzazate", desc: "Etude d’élargissement et de renforcement de la RP 1702 du Pk 120+000 au Pk 155+000 ", img: "assets/images/ingenierie/routes/elargissement-rp1702-ouarzazate.jpg" },
            { title: "Liaison RN 8 – Had Mdawad", client: "Direction Provinciale d'Al Hoceima", desc: "Actualisation de l’étude de construction et étude de stabilité et de confortement des talus au niveau de la liaison reliant la RN 8 à Had M’dawad sur 12.6 Kms ", img: "assets/images/ingenierie/routes/stabilite-talus-rn8.jpg" },
            { title: "PNRR II - Al Hoceima", client: "Conseil Provincial d'Al Hoceima", desc: "Étude de construction de 198,47 km de routes rurales (Lot 8 sur 34 km).", img: "assets/images/ingenierie/routes/pnrr2-al-hoceima-rural.jpg" },
            { title: "Routes Rurale - Al Hoceima", client: "Commune Rurale d'Aghtisse", desc: "Etude de construction des routes suivantes : RP 5204 et Aghtisse par Issakkimene sur 1 Kms, la route reliant Sidi Bouzineb et Bourd  sur 15 Kms,.. ", img: "assets/images/ingenierie/routes/route-aghtisse-issakkimene.jpg" },
            { title: "Route Provinciale n° 7319 : Anemzi – Anefgou", client: "Direction Provinciale de Khénifra", desc: "Etude de construction de la RP 7319 reliant Anemzi à Anefgou du Pk 97+000 au PK 119+500 ", img: "assets/images/ingenierie/routes/route-anemzi-anefgou.jpg" },
            { title: "Route Provinciale n° 7319 : Ait Bouarbi", client: "Direction Provinciale de Khénifra", desc: "Etude de changement de tracé de la RP 7319 entre les PK 64+000 et PK 82+000 par la localité Ait Bouarbi sur 20 Kms", img: "assets/images/ingenierie/routes/changement-trace-ait-bouarbi.jpg" },
            { title: "Route Provinciale n° 4214", client: "Direction Provinciale de Kénitra", desc: "Etude d’élargissement et de renforcement de la RP 4214 du Pk 26+000 au PK 54+00 ", img: "assets/images/ingenierie/routes/elargissement-rp4214.jpg" },
            { title: "RN 1 (Lot 1)", client: "Direction Régionale de Laâyoune", desc: "Étude d’amélioration du niveau de service de la de la RN1 du PK 1300+000  au PK 1340+000 sur 40 Kms.", img: "assets/images/ingenierie/routes/amelioration-rn1-lot1.jpg" },
            { title: "RN 1 (Lot 2)", client: "Direction Régionale de Laâyoune", desc: "Étude d’amélioration du niveau de service de la de la RN1 du PK 1375+000  au PK 1400+000 et du PK 1416+000 au  PK 1424+000 sur 33 Km", img: "assets/images/ingenierie/routes/amelioration-rn1-lot2.jpg" },
            { title: "Route Provinciale n° 4323", client: "Direction Provinciale de Kénitra", desc: "Etude d’élargissement et de renforcement de la RP 4323 du PK 28+000 au PK 42+000 ", img: "assets/images/ingenierie/routes/elargissement-rp4323.jpg" },
            { title: "Liaison RN 8 – Zaouiat Tamadit", client: "Direction Provinciale d'Al Hoceima", desc: "Etude de construction de la route reliant la RN 8 à douar Zaouiat Tamadit sur 10 km", img: "assets/images/ingenierie/routes/liaison-rn8-zaouiat-tamadit.jpg" },
            { title: "Liaison RP 5427 – Douar Aziza", client: "Province de Guercif", desc: "Etude de construction de la route reliant la RP 5427 et douar Aziza sur 14.5 km", img: "assets/images/ingenierie/routes/liaison-rp5427-douar-aziza.jpg" },
            { title: "Liaison RR 317 - Aghbalou Nkerkour", client: "Direction Régionale de Béni Mellal", desc: "Étude préliminaire et projet d'exécution de la liaison RR317 – Aghbalou N’kerkour sur 14 km", img: "assets/images/ingenierie/routes/liaison-rr317-aghbalou.jpg" },
            { title: "RR 718", client: "Direction Régionale de Meknès", desc: "Étude de dédoublement de la RR 718 du PK 16+500 au PK 22+000", img: "assets/images/ingenierie/routes/dedoublement-rr718.jpg" },
            { title: "RP 4613", client: "Direction Régionale de Tanger", desc: "Étude d’élargissement et de renforcement de la RP 4613 sur 7 km", img: "assets/images/ingenierie/routes/elargissement-rp4613.jpg" },
            { title: "RP 4600 et RP 4602", client: "Direction Régionale de Tanger", desc: "Étude d’élargissement et de renforcement de la RP 4600 et RP 4602 sur 14 km", img: "assets/images/ingenierie/routes/elargissement-rp4600-4602.jpg" },
            { title: "05 Liaisons de proximité - Béni Mellal", client: "Direction Régionale de Béni Mellal", desc: "Étude Préliminaire et du projet d’exécution de 05 liaisons sur 28 Kms ", img: "assets/images/ingenierie/routes/cinq-liaisons-proximite.jpg" },
            { title: "RP 3224, 3210 et 3215", client: "Direction Régionale de Béni Mellal", desc: "Étude d’élargissement et de renforcement des routes suivantes : RP 3224, RP 3210  et la RP 3215 sur 30 km", img: "assets/images/ingenierie/routes/elargissement-rp3224-3210-3215.jpg" },
            { title: "2 Liaisons - Al Hoceima", client: "Direction Provinciale d'Al Hoceima", desc: "Etude de construction de la liaison RN 8 à Bni Ahmed sur 8 Km  et de la liaison Bni Ammart-Tamchcht sur 11 km.", img: "assets/images/ingenierie/routes/liaisons-bni-ahmed-tamchicht.jpg" }
        ]
    },
    OUVRAGES: {
        title: "Ouvrages d'Art",
        desc: "Expertise technique et Etude de reconstruction de ponts et dalots hydrauliques.",
        projects: [
            { title: "Passages à Niveau (2ème année)", client: "Office National des Chemins de Fer (ONCF)", desc: "Remplacement de passages à niveau - 2ème année (ONCF).", img: "assets/images/ingenierie/ouvrages/remplacement-pn-oncf-annee2.jpg" },
            { title: "Passages à Niveau (1ère année)", client: "Office National des Chemins de Fer (ONCF)", desc: "Remplacement de passages à niveau - 1ère année (ONCF).", img: "assets/images/ingenierie/ouvrages/remplacement-pn-oncf-annee1.jpg" },
            { title: "4 OA - RP 4103", client: "Direction Provinciale de Chefchaouen", desc: "Étude de reconstruction de 4 ouvrages d'art sur la RP 4103", img: "assets/images/ingenierie/ouvrages/reconstruction-4oa-rp4103.jpg" },
            { title: "OA Oued Amatras (RN 2)", client: "Direction Provinciale de Chefchaouen", desc: "Étude de reconstruction d'un OA sur Oued Amatras au PK 143+500 de la RN 2", img: "assets/images/ingenierie/ouvrages/oa-oued-amatras-rn2.jpg" },
            { title: "OA Oued Bouksaibi (RN 2)", client: "Direction Provinciale de Chefchaouen", desc: "Étude de reconstruction d'un OA sur Oued Bouksaibi au PK 133+000 de la RN 2", img: "assets/images/ingenierie/ouvrages/oa-oued-bouksaibi-rn2.jpg" },
            { title: "Passage Inférieur Lafarge", client: "Lafarge Holcim Maroc", desc: "Etude de définition et du projet d’exécution du passage inférieur au niveau de la carrière EST de l’usine lafarge Bouskoura", img: "assets/images/ingenierie/ouvrages/passage-inferieur-lafarge-execution.jpg" },
            { title: "2 Dalots Oued Chkik - Bouznika", client: "SOREC", desc: "Étude technique et suivi des travaux d'exécution de 2 dalots sur Oued Chkik ", img: "assets/images/ingenierie/ouvrages/deux-dalots-oued-chkik.jpg" },
            { title: "Pont Oued Mahdouma (RN 6)", client: "Direction Provinciale de Meknes", desc: "Etude de construction d’un Pont situé  à la RN 6 sur Oued Mahdouma", img: "assets/images/ingenierie/ouvrages/pont-oued-mahdouma-rn6.jpg" },
            { title: "03 OA sur la RN 16 - Tanger", client: "Direction Provinciale de Tanger", desc: "Étude de construction de trois ouvrages d’art sur la RN16 entre les PK 1+000 et 6+000", img: "assets/images/ingenierie/ouvrages/trois-oa-rn16-rocade.jpg" },
            { title: "OA PK 418+500 (RN 13)", client: "Direction Provinciale de Khénifra", desc: "Etude de définition de construction d’un OA situé au Pk 418+500 de la RN 13", img: "assets/images/ingenierie/ouvrages/oa-rn13-pk418.jpg" },
            { title: "OA PK 421+500 (RN 13)", client: "Direction Provinciale de Khénifra", desc: "Etude de définition et l’etude d’avant projet de construction d’un OA situé au Pk 421+500 de la RN 13", img: "assets/images/ingenierie/ouvrages/oa-rn13-pk421.jpg" },
            { title: "Pont Oued Jdida -RN 6", client: "Direction Provinciale de Meknès", desc: "Etude de rectification du tracé de la RN6 et construction d’un OA sur oued jdida", img: "assets/images/ingenierie/ouvrages/pont-oued-jdida-rn6.jpg" },
            { title: "ouvrages RN 2 - Al Hoceima", client: "Direction Provinciale d'Al Hoceima", desc: "Étude d'ouvrage d'assainissement et réparation des dégats de crues (PK 198 à PK 244 de la RN 2).", img: "assets/images/ingenierie/ouvrages/reparation-crues-rn2.jpg" },
            { title: "OA Oued Mkkes (RR 506)", client: "Direction Provinciale de Sidi Kacem", desc: "Étude de définition d’un OA sur Oued Mikkes  au PK 3+347 de la RR506", img: "assets/images/ingenierie/ouvrages/oa-oued-mkkes-rr506.jpg" },
            { title: "OA Oued Rdat (RP 4232)", client: "Direction Provinciale de Sidi Kacem", desc: "Étude de définition d’un OA sur Oued Rdat  au PK 29+487 de la RP4232", img: "assets/images/ingenierie/ouvrages/oa-oued-rdat-rp4232.jpg" }
        ]
    },
    HYDRAULIQUE: {
        title: "Hydraulique et Assainissement Urbains",
        desc: "Etude Hydrologique, Assainissement Urbain, Assainissement Routier, gestion hydraulique AEP",
        projects: [
            { title: "Centre d'Adday", client: "Direction Pronvinciale de l'ONEP de Guelmim", desc: "Étude d'alimentation en eau potable du centre d'Aday et douars avoisinants.", img: "assets/images/ingenierie/hydraulique/aep-centre-aday.jpg" },
            { title: "Centre de Lamcied", client: "Direction  Pronvinciale de l'ONEP de Tantan", desc: "Étude d'alimentation en eau potable du centre de Lamcied et douars avoisinants.", img: "assets/images/ingenierie/hydraulique/aep-centre-lamcied.jpg" },
            { title: "Ministère de l'Equipement", client: "Sorec", desc: "Étude hydrologique, hydraulique et d'assainissement de plus de 300 km de routes classées", img: "assets/images/ingenierie/hydraulique/assainissement-ecurie-bouznika.jpg" },
            { title: "Ministère de l'Equipement", client: "Sorec", desc: "Étude hydrologique, hydraulique d'une vingtaine d'Ouvrages d'art", img: "assets/images/ingenierie/hydraulique/assainissement-ecurie-bouznika.jpg" },
            { title: "Centre d'entrainement de Bouznika", client: "Sorec", desc: "Étude d'assainissement et drainage de la zone des écuries du centre.", img: "assets/images/ingenierie/hydraulique/assainissement-ecurie-bouznika.jpg" },
            { title: "Réseau routier de Sidi Kacem", client: "Direction Provinciale de l'Equipement de Sidi Kacem", desc: "Étude hydrologique pour le traitement des dégats de crues survenus au niveau du réseau routier de la Pronvince.", img: "https://images.unsplash.com/photo-1522071823991-b5ae726432cd?q=80&w=800" },
            { title: "Réseau routier des Provinces de Tanger, Tétouan et Larache", client: "Direction Régionale de Tanger", desc: "Étude hydrologique et hydraulique pour le traitement des dégats de crues survenus au niveau du réseau routier des 3 Pronvinces (environ 400 points).", img: "assets/images/ingenierie/hydraulique/diagnostic-degats-crues-2010.jpg" }
        ]
    },
    EXPERTISES: {
        title: "Expertises et Assistance Techniques",
        desc: "Accompagnement dans les Projets d'Infrastructures, confortement des talus, Hydrologie et Protection contre les inondations.",
        projects: [
            { title: "Carrière du projet Souss (Etude et Suivi)", client: "Lafarge du Maroc", desc: "Étude et assistance technique pour la réalisation des piste d'accès à la carrière.", img: "assets/images/ingenierie/expertise/pistes-carriere-souss-assistance.jpg" },
            { title: "Centre d'entrainement de Bouznika (Suivi)", client: "Société Royale d'Encouragement du Cheval (Sorec)", desc: "Mission de suivi des travaux des pistes de courses.", img: "assets/images/ingenierie/expertise/pistes-bouznika-suivi.jpg" },
            { title: "Centre d'entrainement de Bouskoura (Suivi)", client: "Sorec", desc: "Suivi des travaux de réalisation des pistes d'entrainement des chevaux.", img: "assets/images/ingenierie/expertise/pistes-bouskoura-suivi.jpg" },
            { title: "Centre d'entrainement de Bouskoura(Assistance)", client: "Sorec", desc: "Assistance technique pour l'élaboration du DCE des travaux d'aménagement et de drainage des pistes de course.", img: "assets/images/ingenierie/expertise/pistes-bouskoura-assistance-dce.jpg" },
            { title: "Centre d'entrainement de Bouznika (Etude et Suivi)", client: "Sorec", desc: "Étude d'exécution et suivi des travaux de construction de 2 OA sur Oued Chkik au niveau du centre de Bouznika.", img: "assets/images/ingenierie/hydraulique/dalots-oued-chkik-bouznika.jpg" },
            { title: "Cimenterie Tidsi à Ouled Taima", client: "Lafarge du Maroc", desc: "Assistance technique pour les travaux de la route d'accès à la nouvelle cimenterie.", img: "assets/images/ingenierie/expertise/route-acces-cimenterie-tidsi.jpg" },
            { title: "Champ de course Khénifra", client: "Sorec", desc: "Étude technique et suivi de construction de la route d'accès au champ de course.", img: "assets/images/ingenierie/expertise/route-champ-course-khenifra.jpg" },
            { title: "Usine de ciment Tétouan II", client: "Lafarge du Maroc", desc: "Assistance technique pour les travaux de construction de la route d'accès à l'usine.", img: "assets/images/ingenierie/expertise/route-acces-usine-tetouan2.jpg" },
            { title: "Centre d'entrainement de Bouznika", client: "Sorec", desc: "Étude d'assainissement et drainage de la zone des écuries du centre.", img: "assets/images/ingenierie/hydraulique/assainissement-ecurie-bouznika.jpg" },
            { title: "Route Régionale n°408", client: "Direction Provinciale de l'Equipement de Ouezane", desc: "Étude de confortement d'un point de glissement au PK 30+700 de la RR 408.", img: "assets/images/ingenierie/expertise/confortement-glissement-rr408.jpg" },
            { title: "Réseau routier de la DRET de Béni Mellal", client: "Direction Régionale de l'Equipement de Béni Mellal", desc: "Étude de traitement des dégats de crues survenus au niveau du réseau routier de la région.", img: "assets/images/ingenierie/expertise/degats-crues-beni-mellal.jpg" },
            { title: "Cimenterie Tétouan 2", client: "Lafarge du Maroc", desc: "Étude de traitement d'un point de glissement au niveau de la route d'accès à la cimenterie", img: "assets/images/ingenierie/expertise/traitement-glissement-tetouan2.jpg" },
            { title: "Route nationale n°2 ", client: "Direction Provinciale de l'Equipement de Chefchaouen", desc: "Etude de confortement du glissement situé entre les PK 32+500 et 33+500 de la RN2", img: "assets/images/ingenierie/expertise/confortement-glissement-rn2.jpg" },
            { title: "Réseau routier de Sidi Kacem", client: "Direction Provinciale de l'Equipement de Sidi Kacem", desc: "Étude de traitement des dégats de crues survenus au niveau du réseau routier de la Pronvince.", img: "https://images.unsplash.com/photo-1522071823991-b5ae726432cd?q=80&w=800" },
            { title: "RP 4600", client: "Direction Provinciale de l'Equipement de Tanger", desc: "Étude géotechnique de la RP 4600 entre les PK 0+000 et 4+500", img: "assets/images/ingenierie/expertise/etude-geotechnique-rp4600.jpg" },
            { title: "RP 4602", client: "Direction Provinciale de  l'Equipement de Tanger", desc: "Étude géotechnique de la RP 4602 entre les PK 0+000 et 9+000", img: "assets/images/ingenierie/expertise/etude-geotechnique-rp4602.jpg" },
            { title: "Réseau routier des Provinces de Tanger, Tétouan et Larache", client: "Direction Régionale de Tanger", desc: "Étude de traitement des dégats de crues survenus au niveau du réseau routier des 3 Pronvinces (environ 400 points).", img: "assets/images/ingenierie/hydraulique/diagnostic-degats-crues-2010.jpg" }
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('.category-circle');
    const body = document.body;
    const detailView = document.getElementById('project-detail');
    const detailTitle = document.getElementById('detail-title');
    const detailDesc = document.getElementById('detail-desc');
    const gallery = document.getElementById('project-gallery');
    const backBtn = document.getElementById('back-button');

    const overlay = document.createElement('div');
    overlay.className = 'expansion-overlay';
    body.appendChild(overlay);

    // Category color mapping
    const categoryColors = {
        vrd: '#1e3a8a',
        routier: '#475569',
        ouvrages: '#b5951a',
        expertises: '#0d9488'
    };

    circles.forEach(circle => {
        circle.addEventListener('click', (e) => {
            const category = circle.dataset.category;
            const color = circle.style.getPropertyValue('--circle-color') || categoryColors[category];
            const data = projectData[category];

            if (!data) return;

            // Handle programmatic clicks (e.g., from buttons) where clientX/Y are undefined
            const rect = circle.getBoundingClientRect();
            const x = e.clientX || (rect.left + rect.width / 2);
            const y = e.clientY || (rect.top + rect.height / 2);

            overlay.style.backgroundColor = color;
            overlay.style.top = `${y}px`;
            overlay.style.left = `${x}px`;
            overlay.classList.add('active');

            setTimeout(() => {
                body.classList.add('in-detail');
                body.style.backgroundColor = color;

                // Apply category color to detail view
                document.documentElement.style.setProperty('--current-category-color', color);

                detailView.classList.remove('hidden');

                detailTitle.textContent = data.title;
                detailDesc.textContent = data.desc;

                gallery.innerHTML = '';
                data.projects.forEach((project, index) => {
                    const listItem = document.createElement('div');
                    listItem.className = `project-list-item stagger-${(index % 5) + 1}`;
                    listItem.innerHTML = `
                        <div class="project-dot"></div>
                        <div class="project-split-container">
                            <div class="project-part-operation">
                                <span class="part-label">OPÉRATION</span>
                                <h3>${project.title}</h3>
                                <p>${project.desc}</p>
                            </div>
                            <div class="project-part-divider"></div>
                            <div class="project-part-client">
                                <span class="part-label">CLIENT</span>
                                <div class="client-name">${project.client}</div>
                            </div>
                        </div>
                        <div class="project-arrow">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M9 18l6-6-6-6"/>
                            </svg>
                        </div>
                    `;
                    listItem.addEventListener('click', () => openProjectModal(project));
                    gallery.appendChild(listItem);
                });
            }, 500);
        });
    });

    backBtn.addEventListener('click', () => {
        overlay.classList.remove('active');
        body.classList.remove('in-detail');
        body.style.backgroundColor = '';

        setTimeout(() => {
            detailView.classList.add('hidden');
        }, 500);
    });

    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.querySelector('.close-modal');

    function openProjectModal(project) {
        modalBody.innerHTML = `
            <div class="modal-text-content">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 2.5rem; border-bottom: 2px solid var(--color-accent); padding-bottom: 1.5rem; gap: 2rem;">
                    <div style="flex: 1;">
                        <span style="font-size: 0.8rem; letter-spacing: 0.2em; font-weight: 800; color: var(--color-accent);">OPÉRATION</span>
                        <h2 style="font-size: 2rem; color: var(--color-primary); margin-top: 0.5rem; line-height: 1.2;">${project.title}</h2>
                    </div>
                    <div style="flex: 0 0 250px; text-align: right;">
                        <span style="font-size: 0.8rem; letter-spacing: 0.2em; font-weight: 800; color: var(--color-accent);">CLIENT</span>
                        <div style="font-size: 1.2rem; font-weight: 700; color: #334155; margin-top: 0.5rem;">${project.client}</div>
                    </div>
                </div>
                <div style="font-size: 1.15rem; line-height: 1.8; color: #334155;">
                    <p class="modal-main-desc" style="font-weight: 500; margin-bottom: 2rem;">${project.desc}</p>
                    <div class="modal-details-grid">
                        <div class="detail-block">
                            <h4 style="color: var(--color-primary); margin-bottom: 0.5rem; font-weight: 700;">MISSIONS</h4>
                            <ul style="list-style: none; padding: 0;">
                                <li style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;"><span style="color: var(--color-accent);">•</span> Études d'exécution et de définition</li>
                                <li style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;"><span style="color: var(--color-accent);">•</span> Expertise technique spécialisée</li>
                                <li style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;"><span style="color: var(--color-accent);">•</span> Suivi et assistance technique</li>
                            </ul>
                        </div>
                    </div>
                    <p style="margin-top: 2rem; font-style: italic; font-size: 0.95rem; color: #64748b;">Projet réalisé par Infrastructures Engineering S.A.R.L.</p>
                </div>
            </div>
        `;
        modal.classList.add('active');
    }

    closeBtn.onclick = () => modal.classList.remove('active');
    window.onclick = (e) => { if (e.target == modal) modal.classList.remove('active'); };
});
