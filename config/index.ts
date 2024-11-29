export const APP_CONFIG = {
  version: "1.0.0",
  name: "Meme Clan AI Swarm",
  description: "Decentralized AI-powered meme generation and distribution network",
  github: "https://github.com/memeclan/ai-swarm",
  
  // API endpoints
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080",
    wsUrl: process.env.NEXT_PUBLIC_WS_URL || "ws://localhost:8080",
  },

  // Swarm configuration
  swarm: {
    processes: {
      types: [
        'generation',
        'analysis',
        'distribution',
        'recruitment',
        'learning',
        'optimization'
      ] as const,
      states: {
        active: 'Active',
        pending: 'Pending',
        completed: 'Completed',
        failed: 'Failed'
      },
      priorities: {
        high: 'HIGH',
        medium: 'MEDIUM',
        low: 'LOW'
      }
    },
    nodes: {
      maxNodes: 1337,
      minUptime: 0.99,
      responseTime: 100,
      accuracyRate: 0.95,
      distributionEfficiency: 0.99,
    }
  },

  // Token details
  token: {
    name: "MEMECLAN",
    symbol: "MEMECLAN",
    totalSupply: 1_000_000_000, // 1 billion
    description: "MEMECLAN",
    distribution: {
      community: 0.965, // 96.5%
      development: 0.03, // 3%
      aiRewards: 0.005, // 0.5%
    },
    vestingPeriods: {
      development: "Locked and vested",
      aiRewards: "Distributed by AI to high-performing recruits",
      community: "No vesting",
    },
    governance: {
      type: "DAO",
      description: "Decentralized Autonomous Intelligence Organization (DAIO)",
      features: [
        "AI-driven governance",
        "Community voting",
        "Automated reward distribution",
        "Performance-based allocation"
      ]
    }
  },

  // System requirements
  requirements: {
    ram: "16GB",
    cpu: "8 cores",
    storage: "100GB SSD",
    bandwidth: "100Mbps",
  },

  // UI Configuration
  ui: {
    theme: {
      dark: {
        background: "bg-gray-900",
        text: "text-gray-100",
        border: "border-gray-800",
        card: "bg-gray-900/50",
        hover: "hover:bg-gray-800/70",
        logText: "text-white",
        subtext: "text-gray-400"
      },
      light: {
        background: "bg-gray-100",
        text: "text-gray-900",
        border: "border-gray-300",
        card: "bg-white/50",
        hover: "hover:bg-gray-100/70",
        logText: "text-gray-900",
        subtext: "text-gray-600"
      }
    },
    animations: {
      duration: 0.2,
      easing: "ease-in-out",
    }
  },

  // Log levels and categories
  logs: {
    levels: ['error', 'debug', 'info', 'success'] as const,
    categories: [
      'system',
      'network',
      'generation',
      'distribution',
      'analysis',
      'recruitment'
    ] as const,
    categoryColors: {
      system: "text-orange-400",
      network: "text-orange-400",
      generation: "text-orange-400",
      distribution: "text-orange-400",
      analysis: "text-orange-400",
      recruitment: "text-orange-400"
    },
    lightModeColors: {
      system: "text-orange-500",
      network: "text-orange-500",
      generation: "text-orange-500",
      distribution: "text-orange-500",
      analysis: "text-orange-500",
      recruitment: "text-orange-500"
    },
    maxLogs: 100,
    refreshRate: 5000, // ms
  },

  // Source code structure
  sourceCode: {
    repository: {
      name: "meme-clan-ai-swarm",
      license: "MIT",
      version: "1.0.0",
    },
    mainComponents: [
      {
        name: "SwarmCore",
        path: "/lib/swarm/core.ts",
        description: "Core swarm intelligence system",
        tags: ["ai", "swarm", "core"],
        sourceCode: `export class SwarmCore {
  private nodes: SwarmNode[] = [];
  private status: SwarmStatus = 'idle';

  constructor(config: SwarmConfig) {
    this.initialize(config);
  }

  private async initialize(config: SwarmConfig) {
    this.nodes = await Promise.all(
      Array.from({ length: config.nodeCount }, 
        (_, i) => this.createNode(i)
      )
    );
    
    this.status = 'ready';
    this.emit('swarm:initialized', { 
      nodeCount: this.nodes.length 
    });
  }

  public async process(meme: Meme): Promise<ProcessedMeme> {
    this.status = 'processing';
    
    const results = await Promise.all(
      this.nodes.map(node => node.analyze(meme))
    );

    const consensus = this.reachConsensus(results);
    
    this.status = 'idle';
    return this.enhanceMeme(meme, consensus);
  }
}`
      },
      {
        name: "MemeProcessor",
        path: "/lib/meme/processor.ts",
        description: "Advanced meme processing and analysis",
        tags: ["meme", "ai", "analysis"],
        sourceCode: `export class MemeProcessor {
  private model: NeuralNetwork;
  private cache: MemeCache;

  constructor() {
    this.model = new NeuralNetwork({
      layers: [784, 256, 128, 64],
      activation: 'relu'
    });
    
    this.cache = new MemeCache({
      maxSize: 1000,
      ttl: '1h'
    });
  }

  public async analyze(meme: RawMeme): Promise<MemeAnalysis> {
    const cached = this.cache.get(meme.hash);
    if (cached) return cached;

    const features = await this.extractFeatures(meme);
    const sentiment = await this.analyzeSentiment(meme);
    const viralPotential = this.predictViralPotential(features);

    const analysis = {
      features,
      sentiment,
      viralPotential,
      timestamp: Date.now()
    };

    this.cache.set(meme.hash, analysis);
    return analysis;
  }
}`
      },
      {
        name: "SwarmMetrics",
        path: "/lib/metrics/index.ts",
        description: "Real-time swarm performance metrics",
        tags: ["metrics", "monitoring", "real-time"],
        sourceCode: `export class SwarmMetrics {
  private metrics: MetricsStore;
  private readonly interval = 1000;

  constructor() {
    this.metrics = new MetricsStore();
    this.startCollection();
  }

  private startCollection() {
    setInterval(() => {
      const metrics = {
        activeNodes: this.getActiveNodes(),
        memoryUsage: this.getMemoryUsage(),
        processedMemes: this.getProcessedCount(),
        avgLatency: this.calculateLatency()
      };

      this.metrics.push(metrics);
      this.emit('metrics:updated', metrics);
    }, this.interval);
  }

  public getReport(): MetricsReport {
    return {
      summary: this.metrics.summarize(),
      trends: this.analyzeTrends(),
      predictions: this.makePredictions()
    };
  }
}`
      }
    ],
    technologies: [
      { name: "Next.js", version: "14.2.16" },
      { name: "React", version: "18.2.0" },
      { name: "TypeScript", version: "5.0.0" },
      { name: "Tailwind CSS", version: "3.3.0" },
      { name: "Framer Motion", version: "10.0.0" }
    ]
  },

  contract: {
    address: "NULL", // Solana address format
    network: "Solana",
    explorer: "https://solscan.io/token/",
    displayName: "$MEMECLAN",
    type: "SPL-20",
    decimals: 9, // Solana standard
    ticker: "MEMECLAN",
    chain: {
      name: "Solana",
      icon: "SOL",
      id: "solana"
    }
  },

  ascii: {
    logo: `
    ███╗   ███╗███████╗███╗   ███╗███████╗     ██████╗██╗      █████╗ ███╗   ██╗
    ████╗ ████║██╔════╝████╗ ████║██╔════╝    ██╔════╝██║     ██╔══██╗████╗  ██║
    ██╔████╔██║█████╗  ██╔████╔██║█████╗      ██║     ██║     ███████║██╔██╗ ██║
    ██║╚██╔╝██║██╔══╝  ██║╚██╔╝██║██╔══╝      ██║     ██║     ██╔══██║██║╚██╗██║
    ██║ ╚═╝ ██║███████╗██║ ╚═╝ ██║███████╗    ╚██████╗███████╗██║  ██║██║ ╚████║
    ╚═╝     ╚═╝╚══════╝╚═╝     ╚═╝╚══════╝     ╚═════╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝
    `,
    animeGirl: `
      /\\_____/\\
     (  o   o  )
      (  =^=  ) 
       (     )
        |___|
    `,
    katana: `
      ○}===================>
    `,
    // Add more ASCII art as needed
  },

  system: {
    status: {
      database: 'connected',
      swarm: 'online',
      api: 'connected'
    },
    version: '1.0.0'
  },
} as const

// Type exports
export type LogLevel = typeof APP_CONFIG.logs.levels[number]
export type LogCategory = typeof APP_CONFIG.logs.categories[number]

// Utility functions
export const getVersionBadge = () => `v${APP_CONFIG.version}`
export const getThemeClass = (isDark: boolean) => 
  isDark ? APP_CONFIG.ui.theme.dark : APP_CONFIG.ui.theme.light

// Environment checks
export const isDev = process.env.NODE_ENV === 'development'
export const isProd = process.env.NODE_ENV === 'production' 