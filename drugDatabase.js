const drugDatabase = [ // for getQuantity()
    {
        drug: "Accrufer capsule",
        diagnosis: "iron deficiency anemia", 
        formulary: false, 
    },  
    {
        drug: "adapalene gel",
        diagnosis: "acne vulgaris", 
        quantityLimitCriteria: true, 
    },  
    {
        drug: "adapalene-benzoyl peroxide gel",
        diagnosis: "acne vulgaris", 
        formulary: false, 
    },  
    {
        drug: "Adderall tablet",
        diagnosis: "ADHD", 
        formulary: false, 
    },  
    {
        drug: "Adderall XR capsule",
        diagnosis: "ADHD", 
        formulary: false, 
    },  
    {
        drug: "Advair Diskus",
        diagnosis: "asthma",
        altDiagnosis: "COPD", 
        formulary: false, 
    },  
    {
        drug: "Aimovig pen",
        diagnosis: "migraine prophylaxis", 
    },  
    {
        drug: "Airsupra inhaler",
        diagnosis: "bronchospasm", 
        formulary: false, 
    },  
    {
        drug: "Ajovy pen",
        diagnosis: "migraine prophylaxis", 
        formulary: false, 
    },  
    {
        drug: "Aklief cream",
        diagnosis: "acne vulgaris", 
        formulary: false, 
    },  
    {
        drug: "alprazolam tablet",
        diagnosis: "anxiety", 
        quantityLimitCriteria: true, 
    },  
    {
        drug: "Anzupgo cream",
        diagnosis: "atopic dermatitis", 
        altDiagnosis: "chronic hand eczema",
        formulary: false, 
    },  
    {
        drug: "Arazlo lotion",
        diagnosis: "acne vulgaris", 
        formulary: false, 
    },  
    {
        drug: "armodafinil tablet",
        diagnosis: "narcolepsy", 
        altDiagnosis: "hypersomnia",
    },  
    {
        drug: "aripiprazole ODT",
        diagnosis: "bipolar disorder", 
    },  
    {
        drug: "aripiprazole oral solution",
        diagnosis: "bipolar disorder", 
    },  
    {
        drug: "asenapine sublingual tablet",
        diagnosis: "bipolar disorder", 
        altDiagnosis: "schizophrenia",
    },  
    {
        drug: "Austedo capsule",
        diagnosis: "tardive dyskinesia", 
        specialty: true,
    }, 
    {
        drug: "Auvelity tablet",
        diagnosis: "major depressive disorder", 
    },  
    {
        drug: "Auvi-Q auto-injector",
        diagnosis: "anaphylaxis", 
        formulary: false, 
    },  
    {
        drug: "azelaic acid gel",
        diagnosis: "rosacea", 
        altDiagnosis: "acne vulgaris",
    },  
    {
        drug: "Azstarys capsule",
        diagnosis: "ADHD", 
        formulary: false,
    },  
    {
        drug: "Baqsimi nasal spray",
        diagnosis: "T2DM",
        formulary: false, 
    },  
    {
        drug: "Belsomra tablet",
        diagnosis: "insomnia", 
    },  
    {
        drug: "Bijuva capsule",
        diagnosis: "menopausal and female climacteric states",
        formulary: false, 
    },  
    {
        drug: "bismuth-metronidazole-tetracycline capsule",
        diagnosis: "H. pylori infection",
        altDiagnosis: "GERD", 
        formulary: false,
    },  
    {
        drug: "brimonidine-timolol eye drops",
        diagnosis: "primary open-angle glaucoma",
    },  
    {
        drug: "brivaracetam tablet",
        diagnosis: "epilepsy",
        altDiagnosis: "seizures", 
    },  
    {
        drug: "budesonide EC 3 mg capsule",
        diagnosis: "Crohn's disease",
        altDiagnosis: "colitis", 
    },  
    {
        drug: "buprenorphine-naloxone film", 
        diagnosis: "opioid dependence",
        quantityLimitCriteria: true,
    }, 
    {
        drug: "Cabtreo gel",
        diagnosis: "acne vulgaris", 
        formulary: false,
    },  
    {
        drug: "Caplyta capsule",
        diagnosis: "major depressive disorder",
        altDiagnosis: "bipolar disorder", 
    },  
    {
        drug: "calcipotriene ointment",
        diagnosis: "psoriasis vulgaris", 
        altDiagnosis: "acne vulgaris",
        formulary: false,
    },  
    {
        drug: "Carbatrol ER capsule",
        diagnosis: "epilepsy", 
        formulary: false,
    },  
    {
        drug: "Cequa solution",
        diagnosis: "dry eye syndrome", 
        formulary: false,
    },  
    {
        drug: "CeQur Simplicity Inserter",
        diagnosis: "T1DM", 
    },  
    {
        drug: "CeQur Simplicity 1U kit",
        diagnosis: "T1DM", 
    },
    {
        drug: "CeQur Simplicity 2U (2.4 mL)",
        diagnosis: "T1DM", 
    },    
    {
        drug: "CeQur Simplicity 2U 4-day patch",
        diagnosis: "T1DM", 
    },    
    {
        drug: "cinacalcet tablet",
        diagnosis: "hyperparathyroidism", 
        altDiagnosis: "hypercalcemia",
    },  
    {
        drug: "clindamycin-benzoyl peroxide gel",
        diagnosis: "acne vulgaris", 
        formulary: false,
    },  
    {
        drug: "clobazam tablet",
        diagnosis: "Lennox-Gastaut Syndrome", 
        altDiagnosis: "epilepsy",
    },  
    {
        drug: "clomiphene tablet",
        diagnosis: "testicular hypofunction",
        formulary: false, 
    },  
    {
        drug: "clonazepam ODT",
        diagnosis: "generalized anxiety disorder",
        formulary: false, 
    }, 
    {
        drug: "Cobenfy capsule",
        diagnosis: "schizophrenia",
    },  
    {
        drug: "Combigan eye drops",
        diagnosis: "ocular hypertension",
        formulary: false, 
    },  
    {
        drug: "Combipatch patch",
        diagnosis: "menopausal and female climacteric states",
        formulary: false, 
    },  
    {
        drug: "Creon DR capsule",
        diagnosis: "exocrine pancreatic insufficiency", 
        altDiagnosis: "cystic fibrosis",
    },  
    {
        drug: "Cresemba capsule",
        diagnosis: "aspergillosis",
        altDiagnosis: "transplant status",  
        formulary: false, 
    },  
    {
        drug: "Crexont ER capsule",
        diagnosis: "parkinsonism",
        formulary: false, 
    },  
    {
        drug: "cromolyn oral concentrate",
        diagnosis: "mastocystitis",
    },  
    {
        drug: "cyclosporine eye drops",
        diagnosis: "dry eye syndrome",
        formulary: false, 
    }, 
    {
        drug: "dabigatran capsule",
        diagnosis: "atrial fibrillation",
        altDiagnosis: 'deep vein thrombosis',
        formulary: false, 
    },  
    {
        drug: "dalfampridine ER tablet",
        diagnosis: "MS", 
        specialty: true,
    },  
    {
        drug: "Dapsone 7.5% gel",
        diagnosis: "acne vulgaris", 
    },  
    {
        drug: "Dayvigo tablet",
        diagnosis: "insomnia",
        formulary: false, 
    },  
    {
        drug: "desvenlafaxine ER tablet",
        diagnosis: "major depressive disorder",
        quantityLimitCriteria: true,
    },  
    {
        drug: "Dexcom G6 sensor",
        diagnosis: "T2DM", 
        altDiagnosis: "T1DM", 
    },  
    {
        drug: "Dexcom G6 receiver",
        diagnosis: "T2DM", 
        altDiagnosis: "T1DM", 
    },   
    {
        drug: "Dexcom G6 transmitter",
        diagnosis: "T2DM", 
        altDiagnosis: "T1DM", 
    },   
    {
        drug: "Dexcom G7 receiver",
        diagnosis: "T2DM",
        altDiagnosis: "T1DM", 
    }, 
    {
        drug: "Dexcom G7 sensor",
        diagnosis: "T2DM", 
        altDiagnosis: "T1DM", 
    },   
    {
        drug: "dextromethorphan-quinidine capsule",
        diagnosis: "pseudobulbar affect", 
    },   
    {
        drug: "difluprednate eye drops",
        diagnosis: "dry eye syndrome", 
    },   
    {
        drug: "doxylampine-pyridoxine tablet",
        diagnosis: "nausea", 
        formulary: false, 
    },  
    {
        drug: "dulaglutide pen",
        diagnosis: "T2DM", 
    },     
    {
        drug: "duloxetine 40 mg capsule",
        diagnosis: "major depressive disorder", 
        formulary: false, 
    },  
    {
        drug: "Durysta implant",
        diagnosis: "primary open-angle glaucoma", 
        formulary: false, 
    },  
    {
        drug: "Dyanavel XR tablet",
        diagnosis: "ADHD", 
        formulary: false, 
    },  
    {
        drug: "Emgality 100 mg pen",
        diagnosis: "migraine prophylaxis", 
    },  
    {
        drug: "Emgality 120 mg pen",
        diagnosis: "migraine prophylaxis", 
    },  
    {
        drug: "Emrosi ER capsule",
        diagnosis: "rosacea", 
        formulary: false, 
    },  
    {
        drug: "Emverm chewable tablet",
        diagnosis: "roundworm",
        altDiagnosis: "whipworm", 
    },  
    {
        drug: "Eohilia suspension packet",
        diagnosis: "eosinophilic esophagitis", 
        formulary: false, 
    },  
    {
        drug: "Eucrisa ointment",
        diagnosis: "dermatitis", 
    },  
    {
        drug: "exemestane tablet",
        diagnosis: "breast cancer", 
        formulary: false, 
    },  
    {
        drug: "Fanapt tablet",
        diagnosis: "bipolar disorder",
        altDiagnosis: "schizophrenia", 
        formulary: false, 
    },  
    {
        drug: "febuxostat tablet",
        diagnosis: "gout", 
        altDiagnosis: "tumor lysis syndrome",
    },  
    {
        drug: "fluorometholone eye drops",
        diagnosis: "dry eye disease", 
        altDiagnosis: 'keratoconjunctivitis sicca',
        formulary: false, 
    },  
    {
        drug: "fluticasone nasal spray",
        diagnosis: "allergic rhinitis", 
        formulary: false, 
    },  
    {
        drug: "Focalin Xr capsule",
        diagnosis: "ADHD", 
        formulary: false, 
    },  
    {
        drug: "Foundayo tablet",
        diagnosis: "obesity", 
        formulary: false, 
    },  
    {
        drug: "FreeStyle Libre 3+ sensor",
        diagnosis: "T2DM", 
        altDiagnosis: "T1DM", 
        formulary: false, 
    },  
    {
        drug: "Furoscix On-Body kit",
        diagnosis: "heart failure", 
    },  
    {
        drug: "Fycompa tablet",
        diagnosis: "partial (focal) seizures", 
        altDiagnosis: "generalized tonic-clonic seizures",
    },  
    {
        drug: "gabapentin 200 mg capsule", 
        diagnosis: "radiculopathy", 
        formulary: false, 
    },  
    {
        drug: "Gemtesa tablet", 
        diagnosis: "overactive bladder", 
        formulary: false, 
    },  
    {
        drug: "Gvoke HypoPen", 
        diagnosis: "T2DM",
        altDiagnosis: "T1DM", 
        formulary: false, 
    },  
    {
        drug: "Hemangeol oral solution",
        diagnosis: "hemangioma", 
        formulary: false, 
    },  
    {
        drug: "Humalog KwikPen",
        diagnosis: "T2DM", 
        formulary: false, 
    },  
    {
        drug: "Humalog 200 unit/mL KwikPen",
        diagnosis: "T2DM", 
        formulary: false, 
    },  
    {
        drug: "Ibsrela tablet",
        diagnosis: "IBS-C", 
        formulary: false, 
    },  
    {
        drug: "icosapent ethyl capsule",
        diagnosis: "hyperlipidemia",
    }, 
    {
        drug: "Icotyde tablet", 
        diagnosis: "psoriasis vulgaris", 
        formulary: false, 
        specialty: true,
    },  
    {
        drug: "Ilet starter kit", // Insulin pump plus CGM
        diagnosis: "T1DM", 
        formulary: false, 
    },  
    {
        drug: "INFeD vial",
        diagnosis: "iron deficiency anemia", 
        altDiagnosis: 'iron deficiency',
        formulary: false, 
    },  
    {
        drug: "Ingrezza capsule",
        diagnosis: "Huntington's disease", 
        altDiagnosis: "tardive dyskinesia",
        formulary: false, 
        specialty: true,
    },  
    {
        drug: "insulin aspart pen",
        diagnosis: "T2DM", 
        altDiagnosis: 'T1DM',
        formulary: false, 
    },  
    {
        drug: "insulin glargine pen",
        diagnosis: "T2DM", 
        altDiagnosis: 'T1DM',
        formulary: false, 
    },  
    {
        drug: "insulin glargine-yfgn pen",
        diagnosis: "T2DM", 
        altDiagnosis: 'T1DM',
        formulary: false, 
    },  
    {
        drug: "insulin lispro pen",
        diagnosis: "T2DM", 
        altDiagnosis: 'T1DM',
        formulary: false, 
    },  
    {
        drug: "iron sucrose vial",
        diagnosis: "iron deficiency anemia", 
        formulary: false,
    },  
    {
        drug: "itraconazole capsule",
        diagnosis: "aspergillosis",
        altDiagnosis: "histoplasmosis",
    }, 
    {
        drug: "itraconazole solution",
        diagnosis: "esophageal candidiasis",
        altDiagnosis: "oropharyngeal candidiasis",

    }, 
    {
        drug: "ivermectin 1% cream",
        diagnosis: "rosacea",
        altDiagnosis: "acne vulgaris",
    }, 
    {
        drug: "Jakafi XR tablet",
        specialty: true,  
    },  
    {
        drug: "Januvia tablet",
        diagnosis: "T2DM",
        formulary: false,  
    }, 
    {
        drug: "Jatenzo capsule",
        diagnosis: "testicular hypofunction",
        formulary: false,  
    },  
    {
        drug: "Jentadueto tablet",
        diagnosis: "T2DM",
        formulary: false,  
    },  
    {
        drug: "Jornay PM capsule",
        diagnosis: "ADHD",
        formulary: false, 
    }, 
    {
        drug: "Journavx tablet",
        diagnosis: "acute pain",
        quantityLimitCriteria: true,     
    }, 
    {
        drug: "Jublia topical solution",
        diagnosis: "tinea unguium",
        formulary: false, 
    }, 
    {
        drug: "Jynarque tablet",
        diagnosis: "CKD",
        formulary: false,
        specialty: true, 
    }, 
    {
        drug: "Kerendia tablet",
        diagnosis: "chronic kidney disease",
        altDiagnosis: "heart failure" 
    },
    {
        drug: "lacosamide tablet",
        diagnosis: "partial (focal) seizures", 
        altDiagnosis: "generalized tonic-clonic seizures", 
    },   
    {
        drug: "lamotrigine ER tablet",
        diagnosis: "seizures", 
        altDiagnosis: "bipolar disorder", 
    }, 
    {
        drug: "Lantus Solostar pen",
        diagnosis: "T2DM", 
        formulary: false, 
    },  
    {
        drug: "Lasix ONYU kit",
        diagnosis: "heart failure", 
        quantityLimitCriteria: true,
        stepTherapy: true, 
    },  
    {
        drug: "levothyroxine capsule",
        diagnosis: "hypothyroidism", 
        formulary: false, 
    },  
    {
        drug: "lidocaine 5% patch",
        diagnosis: "low back pain",
        altDiagnosis: "chronic pain",
    }, 
    {
        drug: "lidocaine-prilocaine cream",
        diagnosis: "anesthesia of skin",
        formulary: false,
    }, 
    {
        drug: "liraglutide pen, Saxenda generic",
        diagnosis: "obesity",
        formulary: false,
    },
    {
        drug: "liraglutide pen (Victoza)",
        diagnosis: "T2DM",
    },
    {
        drug: "lisdexamfetamine capsule",
        diagnosis: "ADHD", 
    },  
    {
        drug: "lisdexamfetamine chewable tablet",
        diagnosis: "ADHD", 
    },  
    {
        drug: "Livtencity tablet",
        diagnosis: "cytomegalovirus", 
        formulary: false,
        specialty: true,
    },  
    {
        drug: "Lokelma powder packet",
        diagnosis: "hyperkalemia",
    }, 
    {
        drug: "lurasidone tablet",
        diagnosis: "bipolar disorder",
    }, 
    {
        drug: "Lybalvi tablet",
        diagnosis: "bipolar disorder",
        altDiagnosis: "schizophrenia",  
        formulary: false, 
    },  
    {
        drug: "Lynkuet capsule",
        diagnosis: "menopausal and female climacteric states",
        altDiagnosis: "flushing",  
        formulary: false, 
    },  
    {
        drug: "Lyumjev KwikPen",
        diagnosis: "T1DM",
        altDiagnosis: "T2DM",  
        formulary: false, 
    },  
    {
        drug: "Lyumjev vial",
        diagnosis: "T1DM",
        altDiagnosis: "T2DM",  
        formulary: false, 
    },  
    {
        drug: "mesalamine 800 mg DR tablet", 
        diagnosis: "ulcerative colitis",
    },  
    {
        drug: "metformin ER 1,000 mg osm-tab", 
        diagnosis: "T2DM",
        formulary: false,  
    },  
    {
        drug: "metformin ER 1,000 mg gastr-tab",
        diagnosis: "T2DM",
        formulary: false,  
    },  
    {
        drug: "methotrexate vial",
        diagnosis: "rheumatoid arthritis",
    }, 
    {
        drug: "mirabegron ER tablet",
        diagnosis: "overactive bladder",
        altDiagnosis: 'frequency of micturition',
    }, 
    {
        drug: "Miebo eye drops",
        diagnosis: "dry eye syndrome",
    }, 
    {
        drug: "modafinil tablet",
        diagnosis: "narcolepsy",
        quantityLimitCriteria: true,
    }, 
    {
        drug: "Monoferric vial",
        diagnosis: "iron deficiency anemia",
        formulary: false,
    }, 
    {
        drug: "Mounjaro pen",
        diagnosis: "T2DM",
    }, 
    {
        drug: "Myfembree tablet",
        diagnosis: "endometriosis",
        altDiagnosis: "uterine fibroids",
        formulary: false,
    }, 
    {
        drug: "Myrbetriq ER tablet",
        diagnosis: "overactive bladder",
        formulary: false,
    }, 
    {
        drug: "Natesto nasal spray", 
        diagnosis: "testicular hypofunction",
        formulary: false,  
    },  
    {
        drug: "Nayzilam nasal spray",
        diagnosis: "convulsions",
        altDiagnosis: "seizures",
    }, 
    {
        drug: "Neffy nasal spray",
        diagnosis: "anaphylaxis",
    }, 
    {
        drug: "Nexletol tablet",
        diagnosis: "hyperlipidemia",
        altDiagnosis: "hypercholesterolemia", 
        formulary: false, 
    }, 
    {
        drug: "Nexlizet tablet",
        diagnosis: "hyperlipidemia",
        altDiagnosis: "hypercholesterolemia", 
        formulary: false, 
    }, 
    {
        drug: "Nurtec ODT",
        diagnosis: "acute treatment of migraines",
        altDiagnosis: "migraine prophylaxis",
        formulary: false, 
    }, 
    {
        drug: "Ohtuvayre inhalation suspension", 
        diagnosis: "COPD",
        formulary: false, 
    },  
    {
        drug: "omega-3 ethyl esters capsule",
        diagnosis: "hyperlipidemia", 
        altDiagnosis: "pure hyperglyceridemia",
    },   
    {
        drug: "Omnipod 5 pods",
        diagnosis: "T1DM",
    }, 
    {
        drug: "Opzelura cream", 
        diagnosis: "atopic dermatitis",
        altDiagnosis: "psoriasis",  
        formulary: false, 
    },  
    {
        drug: "Orilissa tablet", 
        diagnosis: "endometriosis",
    },
    {
        drug: "Osphena tablet", 
        diagnosis: "menopausal and female climacteric states",
        altDiagnosis: "postmenopausal atrophic vaginitis",
    },
    {
        drug: "Ozempic pen", 
        diagnosis: "T2DM",
        altDiagnosis: "obesity",
    },
    {
        drug: "Ozempic tablet",
        diagnosis: "T2DM",
        altDiagnosis: "obesity",
    }, 
    {
        drug: "Pancreaze DR capsule",
        diagnosis: "exocrine pancreatic insufficiency",
        formulary: false,
    }, 
    {
        drug: "PEG-3350 and electrolytes solution",
        diagnosis: "colonoscopy",
        formulary: false,
    }, 
    {
        drug: "PEG-3350 electrolyte solution",
        diagnosis: "colonoscopy",
        formulary: false,
    }, 
    {
        drug: "pimecrolimus cream",
        diagnosis: "atopic dermatitis",
        altDiagnosis: "perioral dermatitis", 
        formulary: false,
    },
    {
        drug: "posaconazole tablet",
        diagnosis: "aspergillosis",
        altDiagnosis: "transplant", 
        formulary: false,
    },
    {
        drug: "Prevymis tablet",
        diagnosis: "CMV prevention",
        altDiagnosis: "transplant status", 
        formulary: false,
    },
    {
        drug: "ProAir RespiClick inhaler",
        diagnosis: "asthma",
        formulary: false,
    },
    {
        drug: "prucalopride tablet",
        diagnosis: "constipation",
        formulary: false,
    },
    {
        drug: "Pylera capsule",
        diagnosis: "H. pylori infection",
        formulary: false,
    },
    {
        drug: "Qbrexza cloth",
        diagnosis: "primary hyperhidrosis",
        formulary: false,
    },
    {
        drug: "Qelbree ER capsule",
        diagnosis: "ADHD",
        formulary: false,
    },
    {
        drug: "Qulipta tablet",
        diagnosis: "migraine prophylaxis",
    },
    {
        drug: "Quviviq tablet",
        diagnosis: "insomnia",
        formulary: false,
    },
    {
        drug: "rasagiline 1 mg tablet",
        diagnosis: "Parkinson's disease",
    },
    {
        drug: "Relistor tablet", 
        diagnosis: "drug-induced constipation",
        altDiagnosis: "opioid-induced constipation",
        formulary: false,
    }, 
    {
        drug: "Restasis eye drops",
        diagnosis: "keratoconjunctivitis",
    },
    {
        drug: "Rexulti tablet",
        diagnosis: "major depressive disorder",
        altDiagnosis: "schizophrenia",
    },
    {
        drug: "Rhofade cream", 
        diagnosis: "rosacea",
        formulary: false,
    }, 
    {
        drug: "Rhopressa eye drops", 
        diagnosis: "glaucoma",
        formulary: false,
    }, 
    {
        drug: "rivastigmine capsule", 
        diagnosis: "dementia",
        altDiagnosis: "memory loss",
    }, 
    {
        drug: "roflumilast tablet", 
        diagnosis: "asthma",
    }, 
    {
        drug: "Roxybond tablet", 
        diagnosis: "pain",
        formulary: false,
    }, 
    {
        drug: "Rybelsus tablet", 
        diagnosis: "T2DM",
        altDiagnosis: "obesity",
    }, 
    {
        drug: "Santyl ointment", 
        diagnosis: "ulcer",
        altDiagnosis: "burn",
    }, 
    {
        drug: "Savella tablet", 
        diagnosis: "major depressive disorder",
        altDiagnosis: "fibromyalgia",
    }, 
    {
        drug: "Seysara tablet", 
        diagnosis: "acne vulgaris",
        formulary: false,
    }, 
    {
        drug: "sitagliptin tablet", 
        diagnosis: "T2DM",
        formulary: false,
    }, 
    {
        drug: "sitagliptin-metformin tablet", 
        diagnosis: "T2DM",
        formulary: false,
    }, 
    {
        drug: "sodium sulfacetamide cleanser", 
        diagnosis: "acne vulgaris",
        formulary: false,
    }, 
    {
        drug: "sodium sulfate-potassium sulfate-magnesium sulfate solution", 
        diagnosis: "colonoscopy preparation",
        formulary: false,
    }, 
    {
        drug: "Spravato dose pack", 
        diagnosis: "major depressive disorder",
        formulary: false,
    }, 
    {
        drug: "Steglatro tablet", 
        diagnosis: "T2DM",
        formulary: false,
    }, 
    {
        drug: "Stiolto Respimat", 
        diagnosis: "COPD",
        formulary: false,
    }, 
    
    {
        drug: "Sucraid solution", 
        diagnosis: "sucrase-isomaltase deficiency",
        formulary: false,
    }, 
    {
        drug: "sucralfate oral suspension", 
        diagnosis: "GERD",
        altDiagnosis: "canker sore",
        formulary: false,
    }, 
    {
        drug: "Sunosi tablet", 
        diagnosis: "narcolepsy",
        altDiagnosis: "OSA",
    }, 
    {
        drug: "Symbravo tablet", 
        diagnosis: "migraine",
        formulary: false,
    }, 
    {
        drug: "Synjardy XR tablet", 
        diagnosis: "T2DM",
        quantityLimitCriteria: true,
    }, 
    {
        drug: "tadalafil 5 mg tablet", 
        diagnosis: "male erectile dysfunction", 
        altDiagnosis: "benign prostatic hyperplasia",
    }, 
    {
        drug: "tadalafil 10 mg tablet", 
        diagnosis: "male erectile dysfunction", 
        formulary: false, 
    }, 
    {
        drug: "Talicia DR capsule", 
        diagnosis: "H. pylori infection",
        altDiagnosis: "GERD",  
        formulary: false, 
    }, 
    {
        drug: "tazarotene cream",
        diagnosis: "acne vulgaris",
        altDiagnosis: "plaque psoriasis",
    }, 
    {
        drug: "temazepam capsule",
        diagnosis: "insomnia",
        quantityLimitCriteria: true, 
    }, 
    {
        drug: "testosterone 1% gel packet",
        diagnosis: "testicular hypofunction",
    },   
    {
        drug: "testosterone 1.62% gel pump",
        diagnosis: "testicular hypofunction",
        formulary: false, 
    },   
    {
        drug: "testosterone 1.62% gel packet",
        diagnosis: "testicular hypofunction",
        formulary: false, 
    },  
    {
        drug: "testosterone 10 mg gel pump",
        diagnosis: "testicular hypofunction",
    },  
    {
        drug: "testosterone cypionate vial", 
        diagnosis: "testicular hypofunction",
    },   
    {
        drug: "Tirosint capsule",
        diagnosis: "hypothyroidism",
        formulary: false,     
    }, 
    {
        drug: "Tonmya SL tablet",
        diagnosis: "fibromyalgia",
        altDiagnosis: "chronic pain",
        formulary: false,     
    }, 
    {
        drug: "Tradjenta tablet",
        diagnosis: "T2DM",
        formulary: false,     
    }, 
    {
        drug: "tretinoin cream",
        diagnosis: "acne vulgaris",
        quantityLimitCriteria: true,     
    }, 
    {
        drug: "Trintellix tablet",
        diagnosis: "major depressive disorder",
        formulary: false,     
    }, 
    {
        drug: "Trulance tablet", 
        diagnosis: "IBS-C", 
        altDiagnosis: 'chronic idiopathic constipation',
        formulary: false, 
    }, 
    {
        drug: "Trulicity pen",
        diagnosis: "T2DM",
    }, 
    {
        drug: "Tryptyr eye drops", 
        diagnosis: "keratoconjunctivitis sicca", 
        formulary: false, 
    }, 
    {
        drug: "Twiist starter kit", 
        diagnosis: "T1DM", 
        formulary: false, 
    }, 
    {
        drug: "Tymlos pen",
        diagnosis: "post-menopausal osteoporosis",
        altDiagnosis: "ostoporosis in men",
        specialty: true,
    }, 
    {
        drug: "Ubrelvy tablet",
        diagnosis: "acute migraine treatment",
    },
    {
        drug: "Valtoco nasal spray", 
        diagnosis: "seizures",
    },
    {
        drug: "Velphoro chewable tablet",
        diagnosis: "phosphorus metabolism",
        altDiagnosis: "hyperphosphatemia", 
    }, 
    {
        drug: "Veltassa powder packet",
        diagnosis: "hyperkalemia",
        altDiagnosis: "chronic kidney disease",
        formulary: false, 
    }, 
    {
        drug: "Vemlidy tablet",
        diagnosis: "hepatitis B",
        altDiagnosis: "HIV", 
    }, 
    {
        drug: "Venofer vial",
        diagnosis: "iron deficiency",
        formulary: false, 
    }, 
    {
        drug: "Veozah tablet", 
        diagnosis: "menopausal and female climacteric states",
        formulary: false,
    },
    {
        drug: "Vevye eye drops", 
        diagnosis: "dry eye syndrome",
        formulary: false,
    },
    {
        drug: "Viberzi tablet", 
        diagnosis: "irritable bowel syndrome-diarrhea",
        formulary: false,
    },
    {
        drug: "Victoza pen", 
        diagnosis: "T2DM",
        formulary: false,
    },
    {
        drug: "Voquezna Dual Pak",
        diagnosis: "H. pylori infection",
        altDiagnosis: "GERD", 
        formulary: false, 
    }, 
    {
        drug: "Voquezna tablet",
        diagnosis: "GERD",
        formulary: false, 
    }, 
    {
        drug: "Voquezna Triple Pak",
        diagnosis: "H. pylori infection",
        altDiagnosis: "GERD", 
        formulary: false, 
    }, 
    {
        drug: "voriconazole tablet", 
        diagnosis: "aspergillosis",
        altDiagnosis: "febrile neutropenia",
    },
    {
        drug: "Vowst capsule", 
        diagnosis: "enterocolitis due to Clostridium difficile, recurrent",
        formulary: false,
    },
    {
        drug: "Vraylar capsule",
        diagnosis: "bipolar disorder",
        altDiagnosis: "major depressive disorder", 
        formulary: false, 
    }, 
    {
        drug: "Vtama cream",
        diagnosis: "atopic dermatitis",
        altDiagnosis: "psoriasis", 
        formulary: false, 
    }, 
    {
        drug: "Vyepti vial",
        diagnosis: "migraine prophylaxis",
        formulary: false,
    },  
    {
        drug: "Vyleesi autoinjector",
        diagnosis: "hypoactive sexual desire disorder",
        formulary: false,
    },  
    {
        drug: "Vyvanse capsule",
        diagnosis: "ADHD",
        formulary: false,
    },  
    {
        drug: "Vyzulta eye drops",
        diagnosis: "open-angle glaucoma",
        formulary: false,
    },  
    {
        drug: "Wegovy pen",
        diagnosis: "obesity",
        altDiagnosis: "NASH",
        formulary: false, 
    }, 
    {
        drug: "Wegovy pen HD",
        diagnosis: "obesity",
        formulary: false, 
    }, 
    {
        drug: "Winlevi cream", 
        diagnosis: "acne vulgaris",
        formulary: false, 
    },
    {
        drug: "Wegovy tablet",
        diagnosis: "obesity",
        altDiagnosis: "ASCVD", 
        formulary: false,
    }, 
    {
        drug: "Xcopri tablet",
        diagnosis: "partial seizures",
        formulary: false, 
    }, 
    {
        drug: "Xcopri titration pack",
        diagnosis: "partial seizures",
        formulary: false, 
    }, 
    {
        drug: "Xdemvy eye drops",
        diagnosis: "infestation by Demodex mites",
    }, 
    {
        drug: "Xhance nasal spray",
        diagnosis: "allergic rhinitis",
        altDiagnosis: "chronic pansinusitis",
        formulary: false,
    }, 
    {
        drug: "Xifaxan tablet",
        diagnosis: "irritable bowel syndrome-diarrhea",
        altDiagnosis: "SIBO",
    }, 
    {
        drug: "Xiidra eye drops",
        diagnosis: "dry eye syndrome",
        altDiagnosis: "keratoconjunctivitis sicca",
    }, 
    {
        drug: "Xphozah tablet",
        diagnosis: "hyperphosphatemia",
        altDiagnosis: "end-stage renal disease",
        formulary: false,
    }, 
    {
        drug: "Xyosted inj",
        diagnosis: "testicular hypofunction",
        formulary: false, 
    }, 
    {
        drug: "Xywav oral solution",
        diagnosis: "narcolepsy",
        formulary: false, 
    }, 
    {
        drug: "Ycanth solution",
        diagnosis: "molluscum contagiosum",
        formulary: false, 
    }, 
    {
        drug: "Yeztugo tablet",
        diagnosis: "HIV pre-exposure prophylaxis",
        quantityLimitCriteria: true, 
    }, 
    {
        drug: "Zavzpret nasal spray",
        diagnosis: "acute migraine treatment",
        formulary: false, 
    }, 
    {
        drug: "Zepbound pen",
        diagnosis: "OSA",
        altDiagnosis: "obesity",
        formulary: false,
    }, 
    {
        drug: "Zelsuvmi 10.3% gel",
        diagnosis: "molluscum contagiosum",
        formulary: false,
    }, 
    {
        drug: "Zenpep DR capsule",
        diagnosis: "exocrine pancreatic insufficiency",
        altDiagnosis: "chronic pancreatitis",
    }, 
    {
        drug: "Zoryve cream",
        diagnosis: "atopic dermatitis",
        altDiagnosis: "psoriasis",
        formulary: false,
    }, 
    {
        drug: "Zoryve foam",
        diagnosis: "atopic dermatitis",
        altDiagnosis: "seborrheic dermatitis",
        formulary: false,
    }, 
    {
        drug: "Zurzuvae capsule",
        diagnosis: "postpartum depression",
    }, 
]