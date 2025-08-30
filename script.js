// --- DATA ---
// Data for multiple companies
const companiesData = [
  {
    "company": "Fructus Terrum S.A",
    "ruc": "RUC20471988368",
    "city": "Lima",
    "district": "Chorrillos",
    "country": "Peru",
    "tier": "Tier 2: Growth Partners",
    "value_range": "Between $250K - $1M",
    "total_position": "#39",
    "tier2_position": "#17",
    "import_value": 269151.56,
    "market_share": 0.00304,
    "imported_products": "cinnamon, coriander, cumin, anise, ginger, turmeric, saffron, laurel, curry, pepper, paprika",
    "last_import_date": "2025-04-21",
    "company_website": "fructusterrum.com",
    "company_linkedin": "https://www.linkedin.com/company/fructus-terrum-s-a-/",
    "company_phone": "p:+5112521276",
    "contact1_name": "Dante Casafranca",
    "contact1_email": "dcasafranca@fructusterrum.com",
    "contact1_position": "purchase manager",
    "contact1_linkedin": "https://www.linkedin.com/in/dante-casafranca-velarde-1826a664/",
    "contact1_phone": "p:+511 252 1276",
    "contact2_name": "Miguel Armejo",
    "contact2_email": "marmejo@fructusterrum.com",
    "contact2_position": "ceo",
    "contact2_linkedin": "https://www.linkedin.com/in/miguel-%C3%A1ngel-armejo-y%C3%A9pez-7a755664/",
    "initial_outreach_date": "2025-08-08",
    "last_contact_date": "2025-08-25",
    "pipeline_stage": "engaged",
    "interest_level": "warm",
    "interest_level_#": 2,
    "outcome": "interested in more info",
    "next_step": "nurture campaign"
  },
  {
    "company": "Agro Exportadores del Sur",
    "ruc": "RUC20551234567",
    "city": "Ica",
    "district": "Ica",
    "country": "Peru",
    "tier": "Tier 1: Strategic Accounts",
    "value_range": "Over $1M",
    "total_position": "#12",
    "tier2_position": "#5",
    "import_value": 1250000.00,
    "market_share": 0.01412,
    "imported_products": "grapes, asparagus, blueberries, avocados",
    "last_import_date": "2025-05-15",
    "company_website": "agroexportsur.com",
    "company_linkedin": "https://www.linkedin.com/company/agro-export-sur/",
    "company_phone": "p:+5156234567",
    "contact1_name": "Sofia Vargas",
    "contact1_email": "svargas@agroexportsur.com",
    "contact1_position": "general manager",
    "contact1_linkedin": "https://www.linkedin.com/in/sofia-vargas/",
    "contact1_phone": "p:+51987654321",
    "contact2_name": "Carlos Mendoza",
    "contact2_email": "cmendoza@agroexportsur.com",
    "contact2_position": "head of logistics",
    "contact2_linkedin": "https://www.linkedin.com/in/carlos-mendoza/",
    "initial_outreach_date": "2025-06-01",
    "last_contact_date": "2025-07-20",
    "pipeline_stage": "negotation",
    "interest_level": "hot",
    "interest_level_#": 3,
    "outcome": "price negotiation",
    "next_step": "send final proposal"
  },
  {
    "company": "Delicias Andinas S.A.C.",
    "ruc": "RUC20609876543",
    "city": "Arequipa",
    "district": "Cerro Colorado",
    "country": "Peru",
    "tier": "Tier 3: Emerging Prospects",
    "value_range": "Under $250K",
    "total_position": "#88",
    "tier2_position": "#45",
    "import_value": 150000.00,
    "market_share": 0.0017,
    "imported_products": "quinoa, chia, amaranth, maca powder",
    "last_import_date": "2025-03-10",
    "company_website": "deliciasandinas.pe",
    "company_linkedin": "https://www.linkedin.com/company/delicias-andinas/",
    "company_phone": "p:+5154321987",
    "contact1_name": "Lucia Fernandez",
    "contact1_email": "lfernandez@deliciasandinas.pe",
    "contact1_position": "product manager",
    "contact1_linkedin": "https://www.linkedin.com/in/lucia-fernandez/",
    "contact1_phone": null,
    "contact2_name": null,
    "contact2_email": null,
    "contact2_position": null,
    "contact2_linkedin": null,
    "initial_outreach_date": "2025-09-01",
    "last_contact_date": "2025-09-05",
    "pipeline_stage": "contacted",
    "interest_level": "cold",
    "interest_level_#": 1,
    "outcome": "sent initial email",
    "next_step": "follow up in 1 week"
  },
  {
    "company": "Inka Nature Foods",
    "ruc": "RUC20518765432",
    "city": "Cusco",
    "district": "Wanchaq",
    "country": "Peru",
    "tier": "Tier 2: Growth Partners",
    "value_range": "Between $250K - $1M",
    "total_position": "#52",
    "tier2_position": "#25",
    "import_value": 450000.00,
    "market_share": 0.0051,
    "imported_products": "coffee beans, cacao, sacha inchi oil",
    "last_import_date": "2025-04-30",
    "company_website": "inkanature.com",
    "company_linkedin": "https://www.linkedin.com/company/inka-nature-foods/",
    "company_phone": "p:+5184223344",
    "contact1_name": "Javier Quispe",
    "contact1_email": "jquispe@inkanature.com",
    "contact1_position": "export manager",
    "contact1_linkedin": "https://www.linkedin.com/in/javier-quispe/",
    "contact1_phone": "p:+51912345678",
    "contact2_name": "Elena Torres",
    "contact2_email": "etorres@inkanature.com",
    "contact2_position": "quality assurance",
    "contact2_linkedin": "https://www.linkedin.com/in/elena-torres/",
    "initial_outreach_date": "2025-07-10",
    "last_contact_date": "2025-08-01",
    "pipeline_stage": "engaged",
    "interest_level": "warm",
    "interest_level_#": 2,
    "outcome": "sample requested",
    "next_step": "send samples"
  },
  {
    "company": "Mundo Palta S.A.",
    "ruc": "RUC20498765123",
    "city": "La Libertad",
    "district": "Trujillo",
    "country": "Peru",
    "tier": "Tier 1: Strategic Accounts",
    "value_range": "Over $1M",
    "total_position": "#8",
    "tier2_position": "#3",
    "import_value": 2500000.00,
    "market_share": 0.0282,
    "imported_products": "hass avocados",
    "last_import_date": "2025-05-20",
    "company_website": "mundopalta.com",
    "company_linkedin": "https://www.linkedin.com/company/mundo-palta/",
    "company_phone": "p:+5144556677",
    "contact1_name": "Ricardo Solano",
    "contact1_email": "rsolano@mundopalta.com",
    "contact1_position": "ceo",
    "contact1_linkedin": "https://www.linkedin.com/in/ricardo-solano/",
    "contact1_phone": "p:+51998877665",
    "contact2_name": null,
    "contact2_email": null,
    "contact2_position": null,
    "contact2_linkedin": null,
    "initial_outreach_date": "2025-02-15",
    "last_contact_date": "2025-06-10",
    "pipeline_stage": "negotation",
    "interest_level": "hot",
    "interest_level_#": 3,
    "outcome": "contract review",
    "next_step": "final call with legal"
  },
  {
    "company": "Especias del Oriente",
    "ruc": "RUC20601239874",
    "city": "Lima",
    "district": "San Isidro",
    "country": "Peru",
    "tier": "Tier 3: Emerging Prospects",
    "value_range": "Under $250K",
    "total_position": "#105",
    "tier2_position": "#58",
    "import_value": 95000.00,
    "market_share": 0.00107,
    "imported_products": "cloves, nutmeg, cardamom",
    "last_import_date": "2025-02-01",
    "company_website": "especiasoriente.pe",
    "company_linkedin": "https://www.linkedin.com/company/especias-del-oriente/",
    "company_phone": "p:+5114405566",
    "contact1_name": "Ana Jimenez",
    "contact1_email": "ajimenez@especiasoriente.pe",
    "contact1_position": "owner",
    "contact1_linkedin": "https://www.linkedin.com/in/ana-jimenez/",
    "contact1_phone": null,
    "contact2_name": null,
    "contact2_email": null,
    "contact2_position": null,
    "contact2_linkedin": null,
    "initial_outreach_date": "2025-09-10",
    "last_contact_date": "2025-09-12",
    "pipeline_stage": "contacted",
    "interest_level": "cold",
    "interest_level_#": 1,
    "outcome": "no response",
    "next_step": "follow up in 2 weeks"
  },
  {
    "company": "Frutos Secos del Norte E.I.R.L.",
    "ruc": "RUC20488877659",
    "city": "Piura",
    "district": "Piura",
    "country": "Peru",
    "tier": "Tier 2: Growth Partners",
    "value_range": "Between $250K - $1M",
    "total_position": "#61",
    "tier2_position": "#30",
    "import_value": 320000.00,
    "market_share": 0.00361,
    "imported_products": "almonds, walnuts, pistachios, cashews",
    "last_import_date": "2025-04-18",
    "company_website": "frutossecosnorte.com",
    "company_linkedin": "https://www.linkedin.com/company/frutos-secos-del-norte/",
    "company_phone": "p:+5173201020",
    "contact1_name": "Mario Luna",
    "contact1_email": "mluna@frutossecosnorte.com",
    "contact1_position": "logistics coordinator",
    "contact1_linkedin": "https://www.linkedin.com/in/mario-luna/",
    "contact1_phone": "p:+51923456789",
    "contact2_name": "Isabel Rios",
    "contact2_email": "irios@frutossecosnorte.com",
    "contact2_position": "general manager",
    "contact2_linkedin": "https://www.linkedin.com/in/isabel-rios/",
    "initial_outreach_date": "2025-06-20",
    "last_contact_date": "2025-08-15",
    "pipeline_stage": "engaged",
    "interest_level": "warm",
    "interest_level_#": 2,
    "outcome": "evaluating prices",
    "next_step": "send comparative chart"
  },
  {
    "company": "Global Grains S.A.",
    "ruc": "RUC20533344556",
    "city": "Callao",
    "district": "Callao",
    "country": "Peru",
    "tier": "Tier 1: Strategic Accounts",
    "value_range": "Over $1M",
    "total_position": "#25",
    "tier2_position": "#11",
    "import_value": 850000.00,
    "market_share": 0.0096,
    "imported_products": "wheat, corn, soy beans, barley",
    "last_import_date": "2025-05-05",
    "company_website": "globalgrains.com",
    "company_linkedin": "https://www.linkedin.com/company/global-grains-sa/",
    "company_phone": "p:+5114298765",
    "contact1_name": "David Flores",
    "contact1_email": "dflores@globalgrains.com",
    "contact1_position": "head of procurement",
    "contact1_linkedin": "https://www.linkedin.com/in/david-flores/",
    "contact1_phone": "p:+51934567890",
    "contact2_name": "Paola Sanchez",
    "contact2_email": "psanchez@globalgrains.com",
    "contact2_position": "cfo",
    "contact2_linkedin": "https://www.linkedin.com/in/paola-sanchez/",
    "initial_outreach_date": "2025-03-01",
    "last_contact_date": "2025-05-25",
    "pipeline_stage": "negotation",
    "interest_level": "hot",
    "interest_level_#": 3,
    "outcome": "final terms discussion",
    "next_step": "sign agreement"
  },
  {
    "company": "Aromas del Valle",
    "ruc": "RUC20600011223",
    "city": "Junin",
    "district": "Huancayo",
    "country": "Peru",
    "tier": "Tier 3: Emerging Prospects",
    "value_range": "Under $250K",
    "total_position": "#150",
    "tier2_position": "#75",
    "import_value": 75000.00,
    "market_share": 0.00084,
    "imported_products": "essential oils, lavender, eucalyptus, mint",
    "last_import_date": "2025-01-20",
    "company_website": "aromasdelvalle.pe",
    "company_linkedin": "https://www.linkedin.com/company/aromas-del-valle/",
    "company_phone": "p:+5164212121",
    "contact1_name": "Rosa Poma",
    "contact1_email": "rpoma@aromasdelvalle.pe",
    "contact1_position": "founder",
    "contact1_linkedin": "https://www.linkedin.com/in/rosa-poma/",
    "contact1_phone": null,
    "contact2_name": null,
    "contact2_email": null,
    "contact2_position": null,
    "contact2_linkedin": null,
    "initial_outreach_date": "2025-09-15",
    "last_contact_date": "2025-09-20",
    "pipeline_stage": "contacted",
    "interest_level": "cold",
    "interest_level_#": 1,
    "outcome": "interested in catalog",
    "next_step": "send catalog and follow up"
  },
  {
    "company": "Superfoods Peru Trading",
    "ruc": "RUC20549988776",
    "city": "Lima",
    "district": "Miraflores",
    "country": "Peru",
    "tier": "Tier 2: Growth Partners",
    "value_range": "Between $250K - $1M",
    "total_position": "#45",
    "tier2_position": "#21",
    "import_value": 680000.00,
    "market_share": 0.0076,
    "imported_products": "camu camu powder, golden berries, lucuma powder",
    "last_import_date": "2025-04-28",
    "company_website": "sptrading.com",
    "company_linkedin": "https://www.linkedin.com/company/superfoods-peru-trading/",
    "company_phone": "p:+5116123456",
    "contact1_name": "Carlos Castillo",
    "contact1_email": "ccastillo@sptrading.com",
    "contact1_position": "commercial director",
    "contact1_linkedin": "https://www.linkedin.com/in/carlos-castillo-spt/",
    "contact1_phone": "p:+51945678901",
    "contact2_name": "Laura Vega",
    "contact2_email": "lvega@sptrading.com",
    "contact2_position": "operations manager",
    "contact2_linkedin": "https://www.linkedin.com/in/laura-vega-ops/",
    "initial_outreach_date": "2025-05-10",
    "last_contact_date": "2025-07-05",
    "pipeline_stage": "engaged",
    "interest_level": "warm",
    "interest_level_#": 2,
    "outcome": "positive feedback on samples",
    "next_step": "schedule a call to discuss volume"
  },
  {
    "company": "Cafe Altura Selecto",
    "ruc": "RUC20511122334",
    "city": "Cajamarca",
    "district": "Cajamarca",
    "country": "Peru",
    "tier": "Tier 2: Growth Partners",
    "value_range": "Between $250K - $1M",
    "total_position": "#70",
    "tier2_position": "#38",
    "import_value": 295000.00,
    "market_share": 0.0033,
    "imported_products": "specialty coffee beans, green coffee",
    "last_import_date": "2025-03-25",
    "company_website": "cafealtura.com.pe",
    "company_linkedin": "https://www.linkedin.com/company/cafe-altura-selecto/",
    "company_phone": "p:+5176345678",
    "contact1_name": "Pedro Galvan",
    "contact1_email": "pgalvan@cafealtura.com.pe",
    "contact1_position": "master roaster",
    "contact1_linkedin": "https://www.linkedin.com/in/pedro-galvan-roaster/",
    "contact1_phone": "p:+51956789012",
    "contact2_name": null,
    "contact2_email": null,
    "contact2_position": null,
    "contact2_linkedin": null,
    "initial_outreach_date": "2025-08-01",
    "last_contact_date": "2025-08-20",
    "pipeline_stage": "engaged",
    "interest_level": "warm",
    "interest_level_#": 2,
    "outcome": "sent our FCL price list",
    "next_step": "follow up on price list"
  },
  {
    "company": " Andean Grains Corporation",
    "ruc": "RUC20601234511",
    "city": "Puno",
    "district": "Juliaca",
    "country": "Peru",
    "tier": "Tier 1: Strategic Accounts",
    "value_range": "Over $1M",
    "total_position": "#15",
    "tier2_position": "#7",
    "import_value": 1100000.00,
    "market_share": 0.0124,
    "imported_products": "royal quinoa, black quinoa, red quinoa",
    "last_import_date": "2025-05-12",
    "company_website": "andeangrains.com",
    "company_linkedin": "https://www.linkedin.com/company/andean-grains-corp/",
    "company_phone": "p:+5151357913",
    "contact1_name": "Maria Mamani",
    "contact1_email": "mmamani@andeangrains.com",
    "contact1_position": "supply chain manager",
    "contact1_linkedin": "https://www.linkedin.com/in/maria-mamani-supply/",
    "contact1_phone": "p:+51967890123",
    "contact2_name": "Juan Carlos Apaza",
    "contact2_email": "jcapaza@andeangrains.com",
    "contact2_position": "ceo",
    "contact2_linkedin": "https://www.linkedin.com/in/jc-apaza-ceo/",
    "initial_outreach_date": "2025-04-01",
    "last_contact_date": "2025-07-15",
    "pipeline_stage": "negotation",
    "interest_level": "hot",
    "interest_level_#": 3,
    "outcome": "finalizing annual contract",
    "next_step": "send signed contract"
  }
];

// --- UTILITY FUNCTIONS ---
const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
};

const formatPercentage = (value) => {
  return `${(value * 100).toFixed(2)}%`;
};

const formatDate = (dateString) => {
  if (!dateString) return 'N/A';
  const date = new Date(dateString);
  const userTimezoneOffset = date.getTimezoneOffset() * 60000;
  return new Date(date.getTime() + userTimezoneOffset).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

const getStatusColors = (status) => {
    switch (status.toLowerCase()) {
        case 'hot': return 'bg-red-100 text-red-800';
        case 'warm': return 'bg-amber-100 text-amber-800';
        case 'engaged': return 'bg-yellow-100 text-yellow-800';
        case 'cold': return 'bg-sky-100 text-sky-800';
        case 'negotation': return 'bg-green-100 text-green-800';
        default: return 'bg-slate-100 text-slate-800';
    }
}

const createInfoItem = (icon, label, value, isLink = false) => {
    if (!value) return '';
    
    const displayValue = String(value).replace(/^p:\+?|^m:\+?/, '');
    let href = '#';
    if (isLink) {
        if (String(value).startsWith('http')) {
            href = value;
        } else if (label.toLowerCase().includes('email')) {
            href = `mailto:${value}`;
        } else if (label.toLowerCase().includes('phone')) {
            href = `tel:${displayValue.replace(/\s/g, '')}`;
        } else {
            href = `//${value}`;
        }
    }

    const valueElement = isLink
        ? `<a href="${href}" target="_blank" rel="noopener noreferrer" class="text-sm text-[#4288d4] hover:underline break-words">${displayValue}</a>`
        : `<p class="text-sm text-[#0d1b2a] font-medium break-words">${displayValue}</p>`;

    return `
        <div class="flex items-start space-x-3">
            <div class="flex-shrink-0 w-5 h-5 text-slate-400 mt-1">${icon}</div>
            <div class="flex-1">
                <p class="text-xs text-slate-500 capitalize">${label}</p>
                ${valueElement}
            </div>
        </div>
    `;
};


// --- RENDER FUNCTIONS ---

const renderDashboard = (data) => {
    const marketPositionTier = data.tier2_position.replace('#', '');
    const marketPositionOverall = data.total_position.replace('#', '');
    
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - ((data.market_share * 100) / 100) * circumference;

    const dashboardContainer = document.getElementById('dashboard-container');
    if (!dashboardContainer) return;
    
    dashboardContainer.innerHTML = `
        <div class="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg border border-slate-200/80 p-6 sm:p-8">
            <!-- Header -->
            <header class="flex flex-col sm:flex-row justify-between items-start mb-8 pb-6 border-b border-slate-200">
                <div class="flex items-center space-x-4">
                    <div class="bg-slate-100 p-3 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-[#27527f]" viewBox="0 0 24 24" fill="currentColor"><path d="M4 21h16v-2H4v2zm0-3h3V5H4v13zm4 0h3V5H8v13zm4 0h3V5h-3v13zm4 0h3V5h-3v13zM3 3h18v1H3V3z" /></svg>
                    </div>
                    <div>
                        <h1 class="text-2xl font-extrabold text-[#0d1b2a]">${data.company}</h1>
                        <p class="text-sm text-slate-500">${data.ruc}</p>
                    </div>
                </div>
                <div class="mt-4 sm:mt-0">
                    <span class="text-sm font-bold text-white bg-[#4fa4fe] px-4 py-2 rounded-lg">${data.tier}</span>
                </div>
            </header>

            <!-- Stats Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div class="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center justify-center text-center border border-slate-200/80">
                    <h3 class="text-sm font-semibold text-slate-500 mb-2">Import Value (USD)</h3>
                    <p class="text-4xl font-bold text-[#0d1b2a] mb-1">${formatCurrency(data.import_value)}</p>
                    <p class="text-xs text-slate-400">${data.value_range}</p>
                    <p class="text-xs text-slate-400 mt-1">Last Import: ${formatDate(data.last_import_date)}</p>
                </div>
                <div class="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center justify-center text-center border border-slate-200/80">
                    <h3 class="text-sm font-semibold text-slate-500 mb-2">Market Share</h3>
                    <div class="relative w-32 h-32">
                        <svg class="w-full h-full" viewBox="0 0 100 100">
                            <circle class="text-slate-200" stroke-width="10" stroke="currentColor" fill="transparent" r="45" cx="50" cy="50" />
                            <circle class="text-[#4288d4]" stroke-width="10" stroke-dasharray="${circumference}" stroke-dashoffset="${offset}" stroke-linecap="round" stroke="currentColor" fill="transparent" r="45" cx="50" cy="50" transform="rotate(-90 50 50)" />
                        </svg>
                        <div class="absolute inset-0 flex items-center justify-center">
                            <span class="text-2xl font-bold text-[#0d1b2a]">${formatPercentage(data.market_share)}</span>
                        </div>
                    </div>
                </div>
                <div class="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center justify-center text-center border border-slate-200/80">
                    <h3 class="text-sm font-semibold text-slate-500 mb-2">Market Position</h3>
                    <p class="text-4xl font-bold text-[#0d1b2a]">#${marketPositionTier}</p>
                    <p class="text-xs text-slate-400">Tier 2 Rank (Overall: #${marketPositionOverall})</p>
                </div>
            </div>
            
            <!-- Main Content -->
            <main class="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8 border-t border-slate-200">
                <!-- Column 1: Company & Contacts -->
                <div class="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 class="text-base font-bold text-[#0d1b2a] mb-4">Company Information</h2>
                        <div class="space-y-4">
                            ${createInfoItem(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>`, "Location", `${data.district}, ${data.city}, ${data.country}`)}
                            ${createInfoItem(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1h-2v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.62-1.22 4.98-3.1 6.51z" /></svg>`, "Website", data.company_website, true)}
                            ${createInfoItem(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-11 6H5v7h3V9zM6.5 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM18 16h-2.5v-3.5c0-.83-.02-1.9-1.16-1.9-1.16 0-1.34.9-1.34 1.84V16H10v-7h2.78v1.27h.04c.38-.72 1.3-1.47 2.74-1.47 2.93 0 3.47 1.92 3.47 4.42V16z" /></svg>`, "LinkedIn", data.company_linkedin, true)}
                            ${createInfoItem(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.02.74-.25 1.02l-2.2 2.2z" /></svg>`, "Company Phone", data.company_phone, true)}
                        </div>
                    </div>
                    <div class="space-y-8">
                        <div>
                            <h2 class="text-base font-bold text-[#0d1b2a] mb-4">Primary Contact</h2>
                            <div class="space-y-4">
                                ${createInfoItem(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>`, "Name", data.contact1_name)}
                                ${createInfoItem(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" /></svg>`, "Position", data.contact1_position)}
                                ${createInfoItem(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>`, "Email", data.contact1_email, true)}
                                ${createInfoItem(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-11 6H5v7h3V9zM6.5 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM18 16h-2.5v-3.5c0-.83-.02-1.9-1.16-1.9-1.16 0-1.34.9-1.34 1.84V16H10v-7h2.78v1.27h.04c.38-.72 1.3-1.47 2.74-1.47 2.93 0 3.47 1.92 3.47 4.42V16z" /></svg>`, "LinkedIn", data.contact1_linkedin, true)}
                                ${createInfoItem(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.02.74-.25 1.02l-2.2 2.2z" /></svg>`, "Phone", data.contact1_phone, true)}
                            </div>
                        </div>
                        ${data.contact2_name ? `
                        <div>
                            <h2 class="text-base font-bold text-[#0d1b2a] mb-4">Secondary Contact</h2>
                            <div class="space-y-4">
                                ${createInfoItem(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>`, "Name", data.contact2_name)}
                                ${createInfoItem(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" /></svg>`, "Position", data.contact2_position)}
                                ${createInfoItem(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>`, "Email", data.contact2_email, true)}
                                ${createInfoItem(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-11 6H5v7h3V9zM6.5 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM18 16h-2.5v-3.5c0-.83-.02-1.9-1.16-1.9-1.16 0-1.34.9-1.34 1.84V16H10v-7h2.78v1.27h.04c.38-.72 1.3-1.47 2.74-1.47 2.93 0 3.47 1.92 3.47 4.42V16z" /></svg>`, "LinkedIn", data.contact2_linkedin, true)}
                            </div>
                        </div>` : ''}
                    </div>
                </div>
                
                <!-- Column 2: Pipeline Status -->
                <div class="lg:border-l lg:pl-8 border-slate-200">
                    <h2 class="text-base font-bold text-[#0d1b2a] mb-4">Pipeline Status</h2>
                    <div class="space-y-4">
                        <div class="flex items-start space-x-3">
                            <div class="flex-shrink-0 w-5 h-5 text-slate-400 mt-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.22-1.05-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z" /></svg></div>
                            <div>
                                <p class="text-xs text-slate-500">Stage</p>
                                <span class="px-2.5 py-1 text-xs font-semibold rounded-full capitalize ${getStatusColors(data.pipeline_stage)}">${data.pipeline_stage}</span>
                            </div>
                        </div>
                        <div class="flex items-start space-x-3">
                            <div class="flex-shrink-0 w-5 h-5 text-slate-400 mt-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg></div>
                            <div>
                                <p class="text-xs text-slate-500">Interest</p>
                                <span class="px-2.5 py-1 text-xs font-semibold rounded-full capitalize ${getStatusColors(data.interest_level)}">${data.interest_level}</span>
                            </div>
                        </div>
                        <div class="flex items-start space-x-3">
                            <div class="flex-shrink-0 w-5 h-5 text-slate-400 mt-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg></div>
                            <div>
                                <p class="text-xs text-slate-500">Rating</p>
                                <div class="flex">
                                    ${Array.from({ length: 3 }, (_, i) => `
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ${i < data['interest_level_#'] ? 'text-yellow-400' : 'text-slate-300'}" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                        ${createInfoItem(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" /></svg>`, "Reason", data.outcome)}
                        ${createInfoItem(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" /></svg>`, "Next Actions", data.next_step)}
                        ${createInfoItem(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" /></svg>`, "Initial Outreach", formatDate(data.initial_outreach_date))}
                        ${createInfoItem(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" /></svg>`, "Last Contact", formatDate(data.last_contact_date))}
                    </div>
                </div>
            </main>
            
            <!-- Footer -->
            <footer class="mt-8 pt-8 border-t border-slate-200">
                 <h3 class="text-sm font-bold text-slate-500 mb-2 tracking-wider">IMPORTED PRODUCTS</h3>
                 <p class="text-sm text-[#1a3654] leading-relaxed capitalize">${data.imported_products}</p>
            </footer>
        </div>
    `;
};

const initializeApp = () => {
    const filterContainer = document.getElementById('filter-container');
    if (!filterContainer) return;

    // Create and populate the select dropdown
    const selectEl = document.createElement('select');
    selectEl.id = 'company-select';
    selectEl.className = 'company-filter';
    
    companiesData.forEach(company => {
        const optionEl = document.createElement('option');
        optionEl.value = company.ruc; // Use RUC as a unique identifier
        optionEl.textContent = company.company;
        selectEl.appendChild(optionEl);
    });

    // Add event listener to update dashboard on change
    selectEl.addEventListener('change', function() {
        const selectedRuc = this.value;
        const selectedCompany = companiesData.find(c => c.ruc === selectedRuc);
        if (selectedCompany) {
            renderDashboard(selectedCompany);
        }
    });

    const labelEl = document.createElement('label');
    labelEl.htmlFor = 'company-select';
    labelEl.className = 'block text-sm font-medium text-slate-700 mb-2';
    labelEl.textContent = 'Select a Company Profile to View';

    filterContainer.appendChild(labelEl);
    filterContainer.appendChild(selectEl);

    // Initial render with the first company
    if (companiesData.length > 0) {
        renderDashboard(companiesData[0]);
    }
};


// --- INITIALIZE APP ---
document.addEventListener('DOMContentLoaded', initializeApp);
