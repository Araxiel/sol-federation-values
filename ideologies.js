const ideologies = [
    {
        "name": "Federal Commonwealth",
        "description": "The Federal Commonwealth is a broad family of movements that treats the Federation as a genuine political community rather than a treaty between otherwise separate worlds. Its supporters favour strong shared institutions, intersystem redistribution, universal public services, and enforceable civic rights, while remaining divided over whether major enterprises should be publicly regulated, publicly owned, or controlled by their workers. Commonwealth parties are usually strongest where citizens depend on expensive infrastructure that no single habitat or settlement could maintain alone.",
        "stats": { "econ": 80, "dipl": 35, "govt": 80, "synd": 55, "ordr": 90 }
    },
    {
        "name": "Frontier Autonomism",
        "description": "Frontier Autonomism is less a unified doctrine than a shared suspicion of distant authority. Its adherents range from local democrats and settlement cooperatives to independent proprietors, but agree that communities facing long communication delays and unfamiliar conditions must retain wide discretion over their own affairs. Autonomist groups often cooperate against federal standardization and then immediately disagree over economics, defence, and almost everything else.",
        "stats": { "econ": 45, "dipl": 25, "govt": 10, "synd": 40, "ordr": 85 }
    },
    {
        "name": "Syndic Coalition",
        "description": "The Syndic Coalition encompasses worker councils, cooperative leagues, mutual-aid societies, and political organizations committed to social ownership. Its members argue that democracy is incomplete when citizens vote in public but obey owners and managers throughout their working lives. Some favour coordinated federal planning, while others imagine a loose federation of self-governing syndics; their common ground is that productive property should answer to the people who use it.",
        "stats": { "econ": 85, "dipl": 40, "govt": 45, "synd": 90, "ordr": 95 }
    },
    {
        "name": "Corporate Directorate",
        "description": "The Corporate Directorate represents the managerial wing of private power: executives, administrators, investors, and political allies who believe complex interstellar society should be run by institutions capable of making disciplined long-term decisions. It combines private ownership with strong central coordination, permissive commercial charters, and an assertive security policy. Directorate sympathizers tend to view electoral hesitation, local vetoes, and workplace democracy as dangerous obstacles to competent administration.",
        "stats": { "econ": 10, "dipl": 70, "govt": 65, "synd": 5, "ordr": 65 }
    },
    {
        "name": "Dominion Traditionalism",
        "description": "Dominion Traditionalism is the Federation's usual label for hierarchical currents that defend inherited authority, unequal civic status, and rule through personal obligation. Traditionalists present hierarchy as a source of continuity in dangerous and isolated societies, and often pair aristocratic politics with private wealth and military prestige. Whether its adherents regard themselves as traditionalists, loyalists, or merely sensible people unfairly maligned by federal propaganda is, naturally, another question.",
        "stats": { "econ": 25, "dipl": 85, "govt": 80, "synd": 10, "ordr": 5 }
    },
    {
        "name": "Civic Federalism",
        "description": "Civic Federalists put equal citizenship and enforceable rights at the centre of the federal project. They support powerful courts, common legal standards, and federal intervention against abusive local authorities, but are often cautious about militarism and agnostic about whether services should be delivered publicly or privately. Critics accuse them of imagining that every political problem can be corrected by one more tribunal, inspectorate, or impeccably drafted charter.",
        "stats": { "econ": 55, "dipl": 25, "govt": 90, "synd": 40, "ordr": 100 }
    },
    {
        "name": "Free Systems League",
        "description": "The Free Systems League is a loose home for autonomists who pair local sovereignty with private enterprise. Its clubs and parties defend the right of worlds, stations, and chartered settlements to set their own taxes, commercial law, and migration rules with minimal federal interference. League politics range from earnest municipal liberalism to the conviction that a sufficiently detailed contract can replace most known forms of government.",
        "stats": { "econ": 20, "dipl": 25, "govt": 5, "synd": 10, "ordr": 75 }
    },
    {
        "name": "Municipal Commonwealth",
        "description": "The Municipal Commonwealth joins local autonomy to an egalitarian public economy. Its supporters favour strong town, station, and planetary governments; locally owned utilities; cooperative housing; and networks of mutual assistance between communities, while resisting ministries that attempt to administer every settlement from the core. They are friendly to syndics but insist that workplaces must still answer to the wider public when they control essential resources.",
        "stats": { "econ": 85, "dipl": 20, "govt": 20, "synd": 70, "ordr": 95 }
    },
    {
        "name": "Federal Development Bloc",
        "description": "The Federal Development Bloc sees state capacity as the practical foundation of unity. It supports federal investment banks, planned infrastructure corridors, strategic industries, and a fleet able to protect new settlements and trade routes. The Bloc is comfortable working with public corporations, private contractors, or worker enterprises so long as all of them contribute to an integrated development programme and meet centrally established targets.",
        "stats": { "econ": 75, "dipl": 70, "govt": 90, "synd": 45, "ordr": 85 }
    },
    {
        "name": "Mutual Defence Compact",
        "description": "The Mutual Defence Compact favours a Federation of well-prepared communities rather than a military apparatus concentrated at the centre. Compact supporters promote civil defence, reserve fleets, hardened infrastructure, emergency stockpiles, and reciprocal aid agreements between neighbouring systems. They accept collective security but distrust expeditionary warfare, permanent commands, and the tendency of distant admirals to discover that every local problem requires a federal solution.",
        "stats": { "econ": 60, "dipl": 5, "govt": 25, "synd": 50, "ordr": 90 }
    },
    {
        "name": "Charter Capitalism",
        "description": "Charter Capitalism holds that settlement and expansion work best when risk-takers receive broad freedom to build institutions around private property and voluntary contract. Its advocates favour competitive infrastructure, investor-backed colonies, and limited federal guarantees rather than common ownership or permanent subsidy. Moderate charterists defend universal legal rights; harder variants blur the boundary between an employer, a municipal government, and a landlord with an unusually comprehensive security department.",
        "stats": { "econ": 5, "dipl": 45, "govt": 25, "synd": 5, "ordr": 55 }
    },
    {
        "name": "Universalist Reform",
        "description": "Universalist Reform is a cross-faction movement united by the belief that citizenship must mean the same thing everywhere. Reformers campaign against hereditary privileges, dependent legal statuses, company jurisdiction over residents, and local exemptions that create second-class citizens. They can be federalists or autonomists, capitalists or synthesists, and consequently excel at agreeing on declarations of principle before dividing bitterly over which institutions should enforce them.",
        "stats": { "econ": 55, "dipl": 30, "govt": 55, "synd": 50, "ordr": 100 }
    }
];
