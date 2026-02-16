/**
 * Realisations Page Logic - File-System Based Content Management
 */

const projectData = {
    vrd: {
        title: "Voirie et Réseaux Divers (VRD)",
        desc: "Études de dédoublement, aménagements urbains stratégiques (RN 16) et pilotage technique de complexes industriels.",
        projects: [
            { title: "Dédoublement RN 1", client: "Direction Provinciale de Safi (METL)", desc: "Étude des travaux de dédoublement au niveau de la traversée de Khemis Zmamra sur 3,8 km.", img: "assets/images/ingenierie/vrd/dedoublement-rn1-khemis-zmamra.jpg" },
            { title: "Aménagement RN 16 - Jnane Niche", client: "Direction Provinciale de Tanger (METL)", desc: "Projet d'exécution traversée de centre (PK 137 au PK 210).", img: "assets/images/ingenierie/vrd/rn16-traversee-jnane-niche.jpg" },
            { title: "Aménagement RN 16 - Aargoub", client: "Direction Provinciale de Tanger (METL)", desc: "Projet d'exécution traversée du centre (PK 137 au PK 210).", img: "assets/images/ingenierie/vrd/rn16-traversee-aargoub.jpg" },
            { title: "Aménagement RN 16 - Stehat", client: "Direction Provinciale de Chefchaouen (METL)", desc: "Projet d'exécution traversée du centre (PK 137 au PK 210).", img: "assets/images/ingenierie/vrd/rn16-traversee-stehat.jpg" },
            { title: "Aménagement RN 16 - Sidi Yahya Aarab", client: "Direction Provinciale de Tétouan (METL)", desc: "Projet d'exécution traversée du centre (PK 137 au PK 210).", img: "assets/images/ingenierie/vrd/rn16-traversee-sidi-yahya-aarab.jpg" },
            { title: "Aménagement RN 16 - Chmaala", client: "Direction Provinciale de Chefchaouen (METL)", desc: "Projet d'exécution traversée du centre (PK 137 au PK 210).", img: "assets/images/ingenierie/vrd/rn16-traversee-chmaala.jpg" },
            { title: "Aménagement RN 16 - Azenti", client: "Direction Provinciale de Tétouan (METL)", desc: "Projet d'exécution traversée du centre (PK 137 au PK 210).", img: "assets/images/ingenierie/vrd/rn16-traversee-azenti.jpg" },
            { title: "Aménagement Global RN 16", client: "Région Tanger-Tétouan-Al Hoceima", desc: "Étude de définition du PK 137 au PK 210.", img: "assets/images/ingenierie/vrd/rn16-amenagement-global.jpg" },
            { title: "Cimenterie de Tétouan", client: "LafargeHolcim Maroc", desc: "Pilotage et coordination des travaux de Génie Civil industriel et de VRD.", img: "assets/images/ingenierie/vrd/cimenterie-tetouan-vrd.jpg" },
            { title: "Usine Tétouan II", client: "Ciments du Maroc", desc: "Assistance technique pour les travaux de VRD du site industriel.", img: "assets/images/ingenierie/vrd/usine-tetouan2-assistance-vrd.jpg" }
        ]
    },
    routier: {
        title: "Études Routières",
        desc: "Conception, élargissement, renforcement et construction d'axes majeurs, routes rurales (PNRR II) et liaisons régionales.",
        projects: [
            { title: "Dédoublement RN 1 (PK 78-82)", client: "Direction Régionale de Casa-Settat", desc: "Étude de dédoublement du PK 78+700 au PK 82+600 sur 3,9 km.", img: "assets/images/ingenierie/routes/dedoublement-rn1-pk78-82.jpg" },
            { title: "Route RR 508", client: "Direction Provinciale de Taounate", desc: "Étude d'élargissement et de renforcement du PK 172 au PK 193.", img: "assets/images/ingenierie/routes/elargissement-rr508.jpg" },
            { title: "Route RR 511", client: "Direction Provinciale de Taza", desc: "Amélioration du niveau de service du PK 27 au PK 66.", img: "assets/images/ingenierie/routes/amelioration-rr511.jpg" },
            { title: "Route RP 1702", client: "Direction Provinciale de Ouarzazate", desc: "Élargissement et renforcement du PK 120 au PK 155 (Ouarzazate).", img: "assets/images/ingenierie/routes/elargissement-rp1702-ouarzazate.jpg" },
            { title: "Liaison RN 8 – Had Mdawad", client: "Direction Provinciale de Béni Mellal", desc: "Actualisation étude construction et stabilité/confortement talus.", img: "assets/images/ingenierie/routes/stabilite-talus-rn8.jpg" },
            { title: "PNRR II : Al Hoceima", client: "Conseil Provincial d'Al Hoceima", desc: "Étude de construction de 198,47 km de routes rurales (Lot 8).", img: "assets/images/ingenierie/routes/pnrr2-al-hoceima-rural.jpg" },
            { title: "RP 5204 – Aghtisse", client: "Commune Rurale d'Aghtisse", desc: "Étude de construction par Issakkimene.", img: "assets/images/ingenierie/routes/route-aghtisse-issakkimene.jpg" },
            { title: "Sidi Bouzineb – Bord", client: "Commune Rurale de Sidi Bouzineb", desc: "Étude de construction par Ouaouizakhr.", img: "assets/images/ingenierie/routes/route-sidi-bouzineb-bord.jpg" },
            { title: "RP 7319 : Anemzi – Anefgou", client: "Direction Provinciale de Midelt", desc: "Étude de construction du PK 97 au PK 119,5.", img: "assets/images/ingenierie/routes/route-anemzi-anefgou.jpg" },
            { title: "RP 7319 : Ait Bouarbi", client: "Direction Provinciale de Midelt", desc: "Étude de changement de tracé sur 20 km.", img: "assets/images/ingenierie/routes/changement-trace-ait-bouarbi.jpg" },
            { title: "RN 1 (Volet Routier)", client: "Direction Provinciale de Safi", desc: "Dédoublement au niveau de la traversée de Khemis Zmamra.", img: "assets/images/ingenierie/routes/rn1-traversee-khemis-zmamra.jpg" },
            { title: "Route RP 4214", client: "Direction Provinciale de Larache", desc: "Élargissement et renforcement du PK 26 au PK 54.", img: "assets/images/ingenierie/routes/elargissement-rp4214.jpg" },
            { title: "RN 1 (Lot 1)", client: "Direction Régionale de Dakhla", desc: "Amélioration du PK 1300 au PK 1340.", img: "assets/images/ingenierie/routes/amelioration-rn1-lot1.jpg" },
            { title: "RN 1 (Lot 2)", client: "Direction Régionale de Laâyoune", desc: "Amélioration du PK 1375 au PK 1424.", img: "assets/images/ingenierie/routes/amelioration-rn1-lot2.jpg" },
            { title: "Route RP 4323", client: "Direction Provinciale de Tanger", desc: "Élargissement et renforcement du PK 28 au PK 42.", img: "assets/images/ingenierie/routes/elargissement-rp4323.jpg" },
            { title: "Liaison RN 8 – Zaouiat Tamadit", client: "Direction Provinciale de Midelt", desc: "Étude de construction de la route.", img: "assets/images/ingenierie/routes/liaison-rn8-zaouiat-tamadit.jpg" },
            { title: "Liaison RP 5427 – Douar Aziza", client: "Conseil Provincial de Taza", desc: "Étude de construction de la route.", img: "assets/images/ingenierie/routes/liaison-rp5427-douar-aziza.jpg" },
            { title: "Liaison RR 317", client: "Direction Provinciale d'Azilal", desc: "Étude préliminaire et projet d'exécution (Aghbalou Nkerkou).", img: "assets/images/ingenierie/routes/liaison-rr317-aghbalou.jpg" },
            { title: "Dédoublement RR 718", client: "Direction Provinciale de Meknès", desc: "Étude du PK 16+500 au PK 22+000.", img: "assets/images/ingenierie/routes/dedoublement-rr718.jpg" },
            { title: "Route RP 4613", client: "Direction Provinciale de Ouezzane", desc: "Étude d'élargissement et de renforcement.", img: "assets/images/ingenierie/routes/elargissement-rp4613.jpg" },
            { title: "RP 4600 et RP 4602", client: "Direction Provinciale de Larache", desc: "Étude d'élargissement et de renforcement structurant.", img: "assets/images/ingenierie/routes/elargissement-rp4600-4602.jpg" },
            { title: "05 Liaisons de proximité", client: "Al Omrane Fès-Meknès", desc: "Étude préliminaire et projet d'exécution sur 28 km.", img: "assets/images/ingenierie/routes/cinq-liaisons-proximite.jpg" },
            { title: "RP 3224, 3210 et 3215", client: "Direction Provinciale de Sidi Kacem", desc: "Étude d'élargissement et de renforcement.", img: "assets/images/ingenierie/routes/elargissement-rp3224-3210-3215.jpg" },
            { title: "Liaisons Bni Ahmed & Tamchicht", client: "Direction Provinciale d'Al Hoceima", desc: "Routes stratégiques RN 8 (8 km) et Bni Ammart (11 km).", img: "assets/images/ingenierie/routes/liaisons-bni-ahmed-tamchicht.jpg" }
        ]
    },
    ouvrages: {
        title: "Ouvrages d'Art",
        desc: "Expertise technique pour le remplacement de passages à niveau (ONCF), reconstruction de ponts et dalots hydrauliques.",
        projects: [
            { title: "Passages à Niveau (2ème année)", client: "Office National des Chemins de Fer (ONCF)", desc: "Remplacement de passages à niveau - 2ème année (ONCF).", img: "assets/images/ingenierie/ouvrages/remplacement-pn-oncf-annee2.jpg" },
            { title: "Passages à Niveau (1ère année)", client: "Office National des Chemins de Fer (ONCF)", desc: "Remplacement de passages à niveau - 1ère année (ONCF).", img: "assets/images/ingenierie/ouvrages/remplacement-pn-oncf-annee1.jpg" },
            { title: "Reconstruction 4 OA (RP 4103)", client: "Direction Provinciale de Chefchaouen", desc: "Étude de reconstruction d'ouvrages d'art majeurs.", img: "assets/images/ingenierie/ouvrages/reconstruction-4oa-rp4103.jpg" },
            { title: "OA Oued Amatras (RN 2)", client: "Direction Provinciale de Tétouan", desc: "Définition au PK 143+500 de la Route Nationale 2.", img: "assets/images/ingenierie/ouvrages/oa-oued-amatras-rn2.jpg" },
            { title: "OA Oued Bouksaibi (RN 2)", client: "Direction Provinciale de Tétouan", desc: "Définition au PK 133+000 de la Route Nationale 2.", img: "assets/images/ingenierie/ouvrages/oa-oued-bouksaibi-rn2.jpg" },
            { title: "Définition 4 OA (RP 4103)", client: "Direction Provinciale de Larache", desc: "Étude technique d'ouvrages provinciaux.", img: "assets/images/ingenierie/ouvrages/definition-4oa-rp4103.jpg" },
            { title: "Passage Inférieur Lafarge", client: "LafargeHolcim Maroc", desc: "Projet d'exécution (Carrière EST Bouskoura).", img: "assets/images/ingenierie/ouvrages/passage-inferieur-lafarge-execution.jpg" },
            { title: "Passage Lafarge (Définition)", client: "LafargeHolcim Maroc", desc: "Étude de définition préliminaire de la structure.", img: "assets/images/ingenierie/ouvrages/passage-inferieur-lafarge-definition.jpg" },
            { title: "2 Dalots Oued Chkik", client: "Commune Urbaine de Bouznika", desc: "Étude technique et suivi d'exécution.", img: "assets/images/ingenierie/ouvrages/deux-dalots-oued-chkik.jpg" },
            { title: "Pont Oued Mahdouma (RN 6)", client: "Direction Provinciale de Khémisset", desc: "Étude de construction du nouvel ouvrage.", img: "assets/images/ingenierie/ouvrages/pont-oued-mahdouma-rn6.jpg" },
            { title: "03 OA sur la RN 16", client: "Direction Provinciale de Tanger", desc: "Construction d'ouvrages d'art structurants côtiers.", img: "assets/images/ingenierie/ouvrages/trois-oa-rn16-rocade.jpg" },
            { title: "OA PK 418+500 (RN 13)", client: "Direction Provinciale de Midelt", desc: "Étude de définition technique.", img: "assets/images/ingenierie/ouvrages/oa-rn13-pk418.jpg" },
            { title: "OA PK 421+500 (RN 13)", client: "Direction Provinciale de Midelt", desc: "Étude de définition et APS de la structure.", img: "assets/images/ingenierie/ouvrages/oa-rn13-pk421.jpg" },
            { title: "Pont Oued Jdida (RN 6)", client: "Direction Provinciale de Sidi Kacem", desc: "Rectification tracé et construction ouvrage.", img: "assets/images/ingenierie/ouvrages/pont-oued-jdida-rn6.jpg" },
            { title: "Assainissement & Crues RN 2", client: "Direction Provinciale d'Al Hoceima", desc: "Étude d'ouvrage et réparation (PK 198 à PK 244).", img: "assets/images/ingenierie/ouvrages/reparation-crues-rn2.jpg" },
            { title: "OA Oued Mkkes (RR 506)", client: "Direction Provinciale de Moulay Abderrahmane", desc: "Définition au PK 3+347 de la Route Régionale.", img: "assets/images/ingenierie/ouvrages/oa-oued-mkkes-rr506.jpg" },
            { title: "OA Oued Rdat (RP 4232)", client: "Direction Provinciale d'El Kelaâ des Sraghna", desc: "Définition au PK 29+487 de la Route Provinciale.", img: "assets/images/ingenierie/ouvrages/oa-oued-rdat-rp4232.jpg" }
        ]
    },
    expertises: {
        title: "Expertises, Hydraulique et Suivi Technique",
        desc: "Diagnostics structurels, confortement de glissements, traitement de crues et gestion hydraulique AEP.",
        projects: [
            { title: "Pistes Carrière Souss", client: "Ciments du Maroc", desc: "Étude et assistance technique pour la réalisation.", img: "assets/images/ingenierie/expertise/pistes-carriere-souss-assistance.jpg" },
            { title: "Pistes Bouznika (Suivi)", client: "Sorec Maroc", desc: "Mission de suivi des travaux des pistes de courses.", img: "assets/images/ingenierie/expertise/pistes-bouznika-suivi.jpg" },
            { title: "Pistes Bouskoura (Suivi)", client: "Sorec Maroc", desc: "Suivi des travaux de réalisation des pistes.", img: "assets/images/ingenierie/expertise/pistes-bouskoura-suivi.jpg" },
            { title: "Pistes Bouskoura (Assistance)", client: "Sorec Maroc", desc: "Assistance technique pour le DCE de drainage.", img: "assets/images/ingenierie/expertise/pistes-bouskoura-assistance-dce.jpg" },
            { title: "Dalots Oued Chkik", client: "Province de Benslimane", desc: "Étude et suivi d'exécution (Bouznika).", img: "assets/images/ingenierie/hydraulique/dalots-oued-chkik-bouznika.jpg" },
            { title: "Cimenterie Tidsi", client: "Ciments du Maroc", desc: "Assistance technique pour la route d'accès.", img: "assets/images/ingenierie/expertise/route-acces-cimenterie-tidsi.jpg" },
            { title: "Champ de course Khénifra", client: "Conseil Provincial de Khénifra", desc: "Étude technique et suivi de construction route d'accès.", img: "assets/images/ingenierie/expertise/route-champ-course-khenifra.jpg" },
            { title: "Usine Tétouan II", client: "LafargeHolcim Maroc", desc: "Assistance technique pour la route d'accès.", img: "assets/images/ingenierie/expertise/route-acces-usine-tetouan2.jpg" },
            { title: "Écurie de Bouznika", client: "Propriétaire Privé HP", desc: "Étude d'assainissement et drainage de la zone.", img: "assets/images/ingenierie/hydraulique/assainissement-ecurie-bouznika.jpg" },
            { title: "AEP centre d'Aday", client: "ONEE Branche Eau", desc: "Étude d'alimentation en eau potable complète.", img: "assets/images/ingenierie/hydraulique/aep-centre-aday.jpg" },
            { title: "AEP centre de Lamcied", client: "ONEE Branche Eau", desc: "Étude technique pour l'alimentation en eau potable.", img: "assets/images/ingenierie/hydraulique/aep-centre-lamcied.jpg" },
            { title: "Glissement RR 408", client: "Direction Provinciale de Taounate", desc: "Étude de confortement au PK 30+700.", img: "assets/images/ingenierie/expertise/confortement-glissement-rr408.jpg" },
            { title: "Dégâts Crues Beni Mellal", client: "DR de l'Equipement Beni Mellal", desc: "Étude de traitement pour le compte de la DRET.", img: "assets/images/ingenierie/expertise/degats-crues-beni-mellal.jpg" },
            { title: "Glissement Tétouan 2", client: "LafargeHolcim Maroc", desc: "Étude de traitement d'un point stratégique.", img: "assets/images/ingenierie/expertise/traitement-glissement-tetouan2.jpg" },
            { title: "Glissement RN 2 (PK 32-33)", client: "Direction Provinciale de Chefchaouen", desc: "Confortement du glissement entre les PK 32+500 et 33+500.", img: "assets/images/ingenierie/expertise/confortement-glissement-rn2.jpg" },
            { title: "Dégâts Crues Sidi Kacem", client: "DP de l'Equipement Sidi Kacem", desc: "Étude de traitement pour le compte de la DPET.", img: "https://images.unsplash.com/photo-1522071823991-b5ae726432cd?q=80&w=800" },
            { title: "Crues Réseau Nord", client: "Ministère de l'Intérieur", desc: "Traitement des dégâts dans les provinces (Lot multi-sites).", img: "assets/images/ingenierie/hydraulique/degats-crues-provinces-nord.jpg" },
            { title: "Géotechnique RP 4600", client: "Direction Provinciale de Larache", desc: "Étude entre les PK 0 et 4+500.", img: "assets/images/ingenierie/expertise/etude-geotechnique-rp4600.jpg" },
            { title: "Géotechnique RP 4602", client: "Direction Provinciale de Larache", desc: "Étude entre les PK 0 et 9.", img: "assets/images/ingenierie/expertise/etude-geotechnique-rp4602.jpg" },
            { title: "Diagnostics Crues 2010", client: "Direction Régionale de Tanger", desc: "Étude de centaines de points de dégâts (Larache, Tanger, Tétouan...).", img: "assets/images/ingenierie/hydraulique/diagnostic-degats-crues-2010.jpg" }
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
