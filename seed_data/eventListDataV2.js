const knex = require("knex")(require("../knexfile"));

module.exports = [
    {
    event_name: "Neon Horizon",
    event_venue: "Massey Hall",
    event_venue_address: "178 Victoria St",
    event_venue_city: "Toronto",
    event_venue_state: "Ontario",
    event_venue_postal_code: "M5B 1T7",
    event_venue_country: "Canada",
    event_venue_email: "contactus@mh-rth.com",
    event_location: knex.raw('POINT (43.6546, 79.3807)'),
    event_date: "2024-05-15",
    event_start_time: "2024-05-15-20-00",
    event_sell_through: 0.85,
    event_ticket_price: 55.00,
    event_ticket_price_currency: "CAD",
    event_description: "Neon Horizon redefines electronic music, blending pulsating beats with ethereal melodies, crafting sonic landscapes that mesmerize. Experience their electrifying performance at Toronto's Massey Hall."
    },
    {
    event_name: "Velvet Echo",
    event_venue: "L'Olympia",
    event_venue_address: "1004 St-Catherine East",
    event_venue_city: "Montreal",
    event_venue_state: "Quebec",
    event_venue_postal_code: "H2L 2G2",
    event_venue_country: "Canada",
    event_venue_email: "billetterie@olympiamontreal.com",
    event_location: knex.raw('POINT (45.5171, 73.5571)'),
    event_date: "2024-06-07",
    event_start_time: "2024-06-07-19-30",
    event_sell_through: 0.90,
    event_ticket_price: 60.00,
    event_ticket_price_currency: "CAD",
    event_description: "Prepare to be swept away by the enchanting sounds of Velvet Echo. Lose yourself in a mesmerizing fusion of smooth melodies and soulful rhythms in the heart of Quebec's vibrant metropolis."
    },
    {
    event_name: "Mirage",
    event_venue: "Scotiabank Centre",
    event_venue_address: "1800 Argyle St",
    event_venue_city: "Halifax",
    event_venue_state: "Nova Scotia",
    event_venue_postal_code: "B3J 2V9",
    event_venue_country: "Canada",
    event_venue_email: "info@scotiabank-centre.com",
    event_location: knex.raw('POINT (44.6471, 63.5761)'),
    event_date: "2024-07-20",
    event_start_time: "2024-07-20-19-00",
    event_sell_through: 0.80,
    event_ticket_price: 50.00,
    event_ticket_price_currency: "CAD",
    event_description: "Journey into the night with Mirage at the Scotiabank Centre in Halifax. Let the ethereal tunes of this captivating band transport you to a world where dreams meet reality, amidst the charming ambiance of Nova Scotia's capital."
    },
    {
    event_name: "Electric Dreamers",
    event_venue: "Rogers Arena",
    event_venue_address: "800 Griffiths Way",
    event_venue_city: "Vancouver",
    event_venue_state: "British Columbia",
    event_venue_postal_code: "V6B 6G1",
    event_venue_country: "Canada",
    event_venue_email: "info@rogersarena.com",
    event_location: knex.raw('POINT (49.2776, 123.1094)'),
    event_date: "2024-08-10",
    event_start_time: "2024-08-10-20-30",
    event_sell_through: 0.95,
    event_ticket_price: 65.00,
    event_ticket_price_currency: "CAD",
    event_description: "Immerse yourself in the dreamy atmosphere of Electric Dreamers at Rogers Arena in Vancouver. Surrender to the enchanting soundscape crafted by this dynamic band against the backdrop of British Columbia's stunning coastal city."
    },
    {
    event_name: "Echoes",
    event_venue: "Scotiabank Arena",
    event_venue_address: "40 Bay St",
    event_venue_city: "Toronto",
    event_venue_state: "Ontario",
    event_venue_postal_code: "M5J 2X2",
    event_venue_country: "Canada",
    event_venue_email: "info@scotiabankarena.com",
    event_location: knex.raw('POINT (43.6435, 79.3791)'),
    event_date: "2024-06-22",
    event_start_time: "2024-06-22-19-30",
    event_sell_through: 0.90,
    event_ticket_price: 70.00,
    event_ticket_price_currency: "CAD",
    event_description: "Experience euphoria with Echoes at the Scotiabank Arena in Toronto. Let their harmonious melodies resonate through the vibrant streets of downtown Toronto, promising an evening of pure musical bliss."
    },
    {
    event_name: "Aurora Borealis",
    event_venue: "Bell MTS Place",
    event_venue_address: "300 Portage Ave",
    event_venue_city: "Winnipeg",
    event_venue_state: "Manitoba",
    event_venue_postal_code: "R3C 5S4",
    event_venue_country: "Canada",
    event_venue_email: "info@bellmtsplace.ca",
    event_location: knex.raw('POINT (49.8927, 97.1436)'),
    event_date: "2024-08-15",
    event_start_time: "2024-08-15-20-00",
    event_sell_through: 0.85,
    event_ticket_price: 60.00,
    event_ticket_price_currency: "CAD",
    event_description: "Witness the breathtaking spectacle of Aurora Borealis at Bell MTS Place in Winnipeg. Lose yourself in the ethereal melodies of this enchanting band, as they illuminate the night with their spellbinding performance."
    },
    {
    event_name: "Dreamwave",
    event_venue: "Scotiabank Centre",
    event_venue_address: "1800 Argyle St",
    event_venue_city: "Halifax",
    event_venue_state: "Nova Scotia",
    event_venue_postal_code: "B3J 2V9",
    event_venue_country: "Canada",
    event_venue_email: "info@scotiabank-centre.com",
    event_location: knex.raw('POINT (44.6471, 63.5761)'),
    event_date: "2024-09-08",
    event_start_time: "2024-09-08-19-00",
    event_sell_through: 0.80,
    event_ticket_price: 45.00,
    event_ticket_price_currency: "CAD",
    event_description: "Feel the heat rise with Dreamwave at the Scotiabank Centre in Halifax. Get ready for an adrenaline-fueled night as this dynamic band ignites the stage, promising an unforgettable experience in the heart of Nova Scotia."
    },
    {
    event_name: "Wildfire Symphony",
    event_venue: "Canadian Tire Centre",
    event_venue_address: "1000 Palladium Dr",
    event_venue_city: "Ottawa",
    event_venue_state: "Ontario",
    event_venue_postal_code: "K2V 1A5",
    event_venue_country: "Canada",
    event_venue_email: "info@canadiantirecentre.com",
    event_location: knex.raw('POINT (45.2969, 75.9269)'),
    event_location: "45.2969° N, 75.9269° W",
    event_date: "2024-10-12",
    event_start_time: "2024-10-12-20-00",
    event_sell_through: 0.85,
    event_ticket_price: 55.00,
    event_ticket_price_currency: "CAD",
    event_description: "Let the flames of passion ignite with Wildfire Symphony at the Canadian Tire Centre in Ottawa. Get swept away by the orchestral grandeur of this dynamic ensemble, promising a fiery performance in Canada's capital."
    },
    {
    event_name: "Electric Pulse",
    event_venue: "History",
    event_venue_address: "1663 Queen Street East",
    event_venue_city: "Toronto",
    event_venue_state: "Ontario",
    event_venue_postal_code: "M4L 1G5",
    event_venue_country: "Canada",
    event_venue_email: "info@scotiabankarena.com",
    event_location: knex.raw('POINT (43.6711, 79.3133°)'),
    event_date: "2024-11-05",
    event_start_time: "2024-11-05-19-00",
    event_sell_through: 0.88,
    event_ticket_price: 75.00,
    event_ticket_price_currency: "CAD",
    event_description: "Feel the pulse of the city with Electric Pulse at the Scotiabank Arena in Toronto. Join the rhythmic journey of this electrifying band as they infuse the night with pulsating energy, promising an unforgettable evening in Toronto."
    },
    {
    event_name: "Sirens",
    event_venue: "Vogue Theatre",
    event_venue_address: "918 Granville St",
    event_venue_city: "Vancouver",
    event_venue_state: "British Columbia",
    event_venue_postal_code: "V6Z 1L2",
    event_venue_country: "Canada",
    event_venue_email: "info@voguetheatre.com",
    event_location: knex.raw('POINT (49.2815, 123.1190)'),
    event_date: "2024-12-20",
    event_start_time: "2024-12-20-20-00",
    event_sell_through: 0.85,
    event_ticket_price: 70.00,
    event_ticket_price_currency: "CAD",
    event_description: "Sirens blends rock, folk, and soul, delivering powerful melodies and evocative lyrics. Dive into their emotional journey at Vogue Theatre for an unforgettable experience in Vancouver."
    },
    {
    event_name: "Solaris Sound",
    event_venue: "Scotiabank Centre",
    event_venue_address: "1800 Argyle St",
    event_venue_city: "Halifax",
    event_venue_state: "Nova Scotia",
    event_venue_postal_code: "B3J 2V9",
    event_venue_country: "Canada",
    event_venue_email: "info@scotiabank-centre.com",
    event_location: knex.raw('POINT (44.6471, 63.5761)'),
    event_date: "2025-01-15",
    event_start_time: "2025-01-15-19-30",
    event_sell_through: 0.90,
    event_ticket_price: 60.00,
    event_ticket_price_currency: "CAD",
    event_description: "Immerse yourself in the celestial sounds of Solaris Sound at the Scotiabank Centre in Halifax. Journey through the cosmos with this captivating band as they weave a tapestry of melodies under the starry skies of Nova Scotia."
    },
    {
    event_name: "Cascade Beats",
    event_venue: "Canadian Tire Centre",
    event_venue_address: "1000 Palladium Dr",
    event_venue_city: "Ottawa",
    event_venue_state: "Ontario",
    event_venue_postal_code: "K2V 1A5",
    event_venue_country: "Canada",
    event_venue_email: "info@canadiantirecentre.com",
    event_location: knex.raw('POINT (45.2969, 75.9269)'),
    event_date: "2025-03-10",
    event_start_time: "2025-03-10-19-00",
    event_sell_through: 0.88,
    event_ticket_price: 65.00,
    event_ticket_price_currency: "CAD",
    event_description: "Let the beats cascade over you with Cascade Beats at the Canadian Tire Centre in Ottawa. Dive into a world of rhythm and melody with this dynamic ensemble, promising a thrilling performance in Canada's capital."
    },
    {
    event_name: "Stellar",
    event_venue: "Brixton Academy",
    event_venue_address: "211 Stockwell Road",
    event_venue_city: "London",
    event_venue_state: "England",
    event_venue_postal_code: "SW9 9SL",
    event_venue_country: "United Kingdom",
    event_venue_email: "mail@o2academybrixton.co.uk",
    event_location: knex.raw('POINT (51.4653, 0.1141)'),
    event_date: "2024-09-05",
    event_start_time: "2024-09-05-19-00",
    event_sell_through: 0.90,
    event_ticket_price: 50.00,
    event_ticket_price_currency: "GBP",
    event_description: "Stellar delivers electrifying energy and soulful melodies on stage. Don't miss their upcoming London show for powerful riffs and an unforgettable performance!"
    },
    {
    event_name: "Tides",
    event_venue: "Manchester Arena",
    event_venue_address: "Victoria Station, Hunts Bank",
    event_venue_city: "Manchester",
    event_venue_state: "England",
    event_venue_postal_code: "M3 1AR",
    event_venue_country: "United Kingdom",
    event_venue_email: "info@manchester-arena.com",
    event_location: knex.raw('POINT (53.4880, 2.2426)'),
    event_date: "2024-10-18",
    event_start_time: "2024-10-18-20-00",
    event_sell_through: 0.85,
    event_ticket_price: 45.00,
    event_ticket_price_currency: "GBP",
    event_description: "Tides storms in with thunderous hard rock riffs, delivering raw energy and fierce stage presence. With a tidal wave of sound, Tides promises an unforgettable experience that will shake you to the core."
    },
    {
    event_name: "Lilies",
    event_venue: "The O2 Arena",
    event_venue_address: "Peninsula Square",
    event_venue_city: "London",
    event_venue_state: "England",
    event_venue_postal_code: "SE10 0DX",
    event_venue_country: "United Kingdom",
    event_venue_email: "info@theo2.co.uk",
    event_location: knex.raw('POINT (51.5030, 0.0037)'),
    event_date: "2024-11-12",
    event_start_time: "2024-11-12-19-30",
    event_sell_through: 0.95,
    event_ticket_price: 55.00,
    event_ticket_price_currency: "GBP",
    event_description: "Lilies melds folk and pop, weaving delicate melodies and heartfelt lyrics. Their music evokes emotion, guiding listeners through love, longing, and introspection. Experience their captivating harmonies live for a performance that lingers in the heart."
    },
    {
    event_name: "Supernova",
    event_venue: "SSE Arena, Belfast",
    event_venue_address: "2 Queens Quay",
    event_venue_city: "Belfast",
    event_venue_state: "Northern Ireland",
    event_venue_postal_code: "BT3 9QQ",
    event_venue_country: "United Kingdom",
    event_venue_email: "info@ssearenabelfast.com",
    event_location: knex.raw('POINT (54.6077, 5.9176)'),
    event_date: "2024-12-20",
    event_start_time: "2024-12-20-20-30",
    event_sell_through: 0.85,
    event_ticket_price: 50.00,
    event_ticket_price_currency: "GBP",
    event_description: "Supernova, master of electronic beats, fuels dance floors with cosmic energy. With catchy rhythms and infectious melodies, prepare for a journey as every track ignites the night. Get ready for an unforgettable experience with Supernova! "
    },
    {
    event_name: "Electric Symphony",
    event_venue: "First Direct Arena",
    event_venue_address: "Arena Way",
    event_venue_city: "Leeds",
    event_venue_state: "England",
    event_venue_postal_code: "LS2 8BY",
    event_venue_country: "United Kingdom",
    event_venue_email: "info@firstdirectarena.com",
    event_location: knex.raw('POINT (53.8038, 1.5491)'),
    event_date: "2025-04-05",
    event_start_time: "2025-04-05-19-30",
    event_sell_through: 0.85,
    event_ticket_price: 60.00,
    event_ticket_price_currency: "GBP",
    event_description: "Electric Symphony, the dynamic DJ duo, electrifies crowds with pulsating beats and euphoric melodies. Prepare for a sonic journey as they blend genres and ignite dance floors, promising an unforgettable night of music and energy."
    },
    {
    event_name: "Crystal Harmony",
    event_venue: "Utilita Arena Birmingham",
    event_venue_address: "King Edwards Rd",
    event_venue_city: "Birmingham",
    event_venue_state: "England",
    event_venue_postal_code: "B1 2AA",
    event_venue_country: "United Kingdom",
    event_venue_email: "info@arenabham.co.uk",
    event_location: knex.raw('POINT (52.4796, 1.8674)'),
    event_date: "2025-05-18",
    event_start_time: "2025-05-18-20-00",
    event_sell_through: 0.90,
    event_ticket_price: 55.00,
    event_ticket_price_currency: "GBP",
    event_description: "Crystal Harmony merges folk and electronic, captivating with ethereal melodies and organic rhythms. A sonic journey where tradition meets innovation, resonating deeply within the soul."
    },
    {
    event_name: "Reveries",
    event_venue: "Manchester Arena",
    event_venue_address: "Victoria Station, Hunts Bank",
    event_venue_city: "Manchester",
    event_venue_state: "England",
    event_venue_postal_code: "M3 1AR",
    event_venue_country: "United Kingdom",
    event_venue_email: "info@manchester-arena.com",
    event_location: knex.raw('POINT (53.4880, 2.2426)'),
    event_date: "2025-06-22",
    event_start_time: "2025-06-22-19-00",
    event_sell_through: 0.88,
    event_ticket_price: 65.00,
    event_ticket_price_currency: "GBP",
    event_description: "Reveries invites listeners into a world of dreamy melodies and introspective lyrics, exploring hidden depths of the soul. Join their sonic journey of self-discovery where every chord resonates with dreams and desires."
    },
    {
    event_name: "Strawberry Lemonade",
    event_venue: "Motorpoint Arena Cardiff",
    event_venue_address: "Mary Ann St",
    event_venue_city: "Cardiff",
    event_venue_state: "Wales",
    event_venue_postal_code: "CF10 2EQ",
    event_venue_country: "United Kingdom",
    event_venue_email: "info@motorpointarenacardiff.co.uk",
    event_location: knex.raw('POINT (51.4783, 3.1828)'),
    event_date: "2025-08-15",
    event_start_time: "2025-08-15-19-30",
    event_sell_through: 0.90,
    event_ticket_price: 60.00,
    event_ticket_price_currency: "GBP",
    event_description: "Strawberry Lemonade, the enchanting songstress, infuses her performances with a refreshing blend of sweetness and zest. With a voice as vibrant as summer, she takes audiences on a tantalizing journey through melody. Get ready to savor her musical flavors, leaving a lingering taste of joy."
    },
    {
    event_name: "Ellipsis",
    event_venue: "The SSE Hydro",
    event_venue_address: "Exhibition Way",
    event_venue_city: "Glasgow",
    event_venue_state: "Scotland",
    event_venue_postal_code: "G3 8YW",
    event_venue_country: "United Kingdom",
    event_venue_email: "info@thessehydro.com",
    event_location: knex.raw('POINT (55.8609, 4.2874)'),
    event_date: "2025-09-30",
    event_start_time: "2025-09-30-20-00",
    event_sell_through: 0.85,
    event_ticket_price: 55.00,
    event_ticket_price_currency: "GBP",
    event_description: "Ellipsis defies genres with ethereal soundscapes, blending dreamy melodies into intricate layers. Each performance invites a journey of introspection and emotion, pushing boundaries of musical innovation."
    },
    {
    event_name: "Cosmic Odyssey",
    event_venue: "The O2 Arena",
    event_venue_address: "Peninsula Square",
    event_venue_city: "London",
    event_venue_state: "England",
    event_venue_postal_code: "SE10 0DX",
    event_venue_country: "United Kingdom",
    event_venue_email: "info@theo2.co.uk",
    event_location: knex.raw('POINT (51.5030, 0.0037)'),
    event_date: "2025-10-25",
    event_start_time: "2025-10-25-20-30",
    event_sell_through: 0.88,
    event_ticket_price: 50.00,
    event_ticket_price_currency: "GBP",
    event_description: "Cosmic Odyssey sparks stages with infectious pop-punk energy, blasting listeners into outer space with cosmic melodies and raw lyrics. Join the odyssey for anthems of rebellion and heartache."
    },
    {
    event_name: "Ivy",
    event_venue: "Manchester Central Convention Complex",
    event_venue_address: "Windmill St",
    event_venue_city: "Manchester",
    event_venue_state: "England",
    event_venue_postal_code: "M2 3GX",
    event_venue_country: "United Kingdom",
    event_venue_email: "info@manchestercentral.co.uk",
    event_location: knex.raw('POINT (53.4750, 2.2465)'),
    event_date: "2026-01-25",
    event_start_time: "2026-01-25-20-30",
    event_sell_through: 0.90,
    event_ticket_price: 75.00,
    event_ticket_price_currency: "GBP",
    event_description: "Ivy blends pop, rock, folk, and a sprinkle of magic into enchanting melodies. Her ethereal voice transports listeners to whimsical realms, promising a spellbinding experience that lingers in the soul."
    }
]