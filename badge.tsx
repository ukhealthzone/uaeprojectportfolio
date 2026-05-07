"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Database, TrendingUp, Zap, GitBranch, Activity, Network, Cpu, Lock } from "lucide-react"
import Link from "next/link"
import { MLArchitectureDiagram } from "@/components/diagrams/ml-architecture-diagram"
import { DataCollectionDiagram } from "@/components/diagrams/data-collection-diagram"
import { LabelingWorkflowDiagram } from "@/components/diagrams/labeling-workflow-diagram"
import { TrainingPipelineDiagram } from "@/components/diagrams/training-pipeline-diagram"
import { HyperparameterTuningDiagram } from "@/components/diagrams/hyperparameter-tuning-diagram"

export default function ModelArchitecturePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">Model Architecture and Deployment</h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto">
            Comprehensive technical architecture powering UAE's advanced real estate intelligence platform. Built with
            enterprise-grade machine learning infrastructure and deployed at scale.
          </p>
        </div>

        {/* System Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">System Architecture Overview</h2>
          <Card className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Database className="w-12 h-12 text-teal-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-900 mb-2">Data Sources</h3>
                <p className="text-sm text-slate-600">12 APIs • 350 scrapers</p>
              </div>
              <div className="text-center">
                <Network className="w-12 h-12 text-teal-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-900 mb-2">Data Lake</h3>
                <p className="text-sm text-slate-600">480GB • Delta format</p>
              </div>
              <div className="text-center">
                <Cpu className="w-12 h-12 text-teal-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-900 mb-2">ETL Pipeline</h3>
                <p className="text-sm text-slate-600">24/7 • 15min batches</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Brain className="w-12 h-12 text-teal-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-900 mb-2">ML Models</h3>
                <p className="text-sm text-slate-600">8 ensemble models</p>
              </div>
              <div className="text-center">
                <Zap className="w-12 h-12 text-teal-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-900 mb-2">Inference API</h3>
                <p className="text-sm text-slate-600">FastAPI • Redis cache</p>
              </div>
              <div className="text-center">
                <Activity className="w-12 h-12 text-teal-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-900 mb-2">Frontend</h3>
                <p className="text-sm text-slate-600">React • Edge CDN</p>
              </div>
            </div>
          </Card>
        </section>

        {/* System Architecture Flow Diagram */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">System Architecture Flow</h2>
          <MLArchitectureDiagram />
        </section>

        {/* Infrastructure Metrics */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Network className="w-8 h-8 text-teal-600" />
                <h3 className="text-xl font-bold text-slate-900">Infrastructure Metrics</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Data Points Processed</span>
                  <span className="font-semibold text-slate-900">2.4M+ daily</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Model Inference Latency</span>
                  <span className="font-semibold text-slate-900">&lt;250ms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">API Response Time</span>
                  <span className="font-semibold text-slate-900">180ms avg</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Uptime SLA</span>
                  <span className="font-semibold text-slate-900">99.97%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Concurrent Users Supported</span>
                  <span className="font-semibold text-slate-900">50,000+</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-8 h-8 text-teal-600" />
                <h3 className="text-xl font-bold text-slate-900">Model Performance</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Valuation Accuracy (MAPE)</span>
                  <span className="font-semibold text-slate-900">3.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Price Prediction R²</span>
                  <span className="font-semibold text-slate-900">0.94</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">ROI Forecast Accuracy</span>
                  <span className="font-semibold text-slate-900">87.3%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Training Data Volume</span>
                  <span className="font-semibold text-slate-900">18.7M records</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Feature Dimensions</span>
                  <span className="font-semibold text-slate-900">247 features</span>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Data Collection Pipeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Data Collection Pipeline</h2>
          <DataCollectionDiagram />
          <Card className="p-6 mt-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Data Sources & Collection Methods</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <Badge className="w-5 h-5 text-teal-600" />
                  Primary Data Sources
                </h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Property Portal APIs (Bayut, Property Finder, Dubizzle)</li>
                  <li>• Government Land Department Records</li>
                  <li>• Real Estate Regulatory Agency (RERA) Data</li>
                  <li>• Dubai Land Department Transaction Records</li>
                  <li>• MLS (Multiple Listing Service) Feeds</li>
                  <li>• Developer Direct APIs</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <Badge className="w-5 h-5 text-teal-600" />
                  Secondary Data Sources
                </h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Google Maps API (Location Intelligence)</li>
                  <li>• Weather & Climate Data</li>
                  <li>• Economic Indicators (Central Bank UAE)</li>
                  <li>• Demographics & Population Statistics</li>
                  <li>• Infrastructure Development Plans</li>
                  <li>• Social Media Sentiment Analysis</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-teal-50 rounded-lg">
              <div className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-teal-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Collection Strategy</h4>
                  <p className="text-sm text-slate-700">
                    Data is collected using 350+ web scrapers and 12 API integrations running 24/7. Each source is
                    polled every 15 minutes with intelligent rate limiting and retry logic. Raw data is validated,
                    deduplicated, and stored in Delta Lake format for efficient processing.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Data Labeling Workflow */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Data Labeling & Annotation Workflow</h2>
          <LabelingWorkflowDiagram />
          <Card className="p-6 mt-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Labeling Process Details</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-slate-900 mb-3">1. Automated Labeling (70% of data)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h5 className="font-medium text-slate-900 mb-2">Price Validation</h5>
                    <p className="text-sm text-slate-600">
                      Historical transaction data automatically labels properties with verified sale prices. Outlier
                      detection removes invalid entries (±3σ from median).
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h5 className="font-medium text-slate-900 mb-2">Feature Extraction</h5>
                    <p className="text-sm text-slate-600">
                      Computer vision models extract features from property images: room count, finishes, view quality,
                      amenities presence with 94% accuracy.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-3">2. Semi-Automated Labeling (20% of data)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h5 className="font-medium text-slate-900 mb-2">Active Learning</h5>
                    <p className="text-sm text-slate-600">
                      ML models flag uncertain predictions for human review. Experts validate properties with confidence
                      scores &lt;0.85.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h5 className="font-medium text-slate-900 mb-2">Quality Scoring</h5>
                    <p className="text-sm text-slate-600">
                      Human annotators score property quality on a 0-100 scale considering condition, location,
                      amenities, and market demand.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-3">3. Manual Labeling (10% of data)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h5 className="font-medium text-slate-900 mb-2">Luxury Properties</h5>
                    <p className="text-sm text-slate-600">
                      High-value properties (&gt;AED 10M) receive expert evaluation including architect reviews and
                      market analyst assessments.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h5 className="font-medium text-slate-900 mb-2">New Developments</h5>
                    <p className="text-sm text-slate-600">
                      Off-plan and newly launched projects manually labeled with developer reputation, location
                      potential, and completion risk factors.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                  <GitBranch className="w-5 h-5 text-amber-600" />
                  Quality Control Process
                </h4>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• Triple annotation for 10% random sample (inter-annotator agreement &gt;0.92)</li>
                  <li>• Weekly calibration sessions with annotation team</li>
                  <li>• Automated consistency checks across related properties</li>
                  <li>• Quarterly expert audits of labeled dataset</li>
                  <li>• Continuous feedback loop from model predictions to labeling guidelines</li>
                </ul>
              </div>
            </div>
          </Card>
        </section>

        {/* Training Pipeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Model Training Pipeline</h2>
          <TrainingPipelineDiagram />
          <Card className="p-6 mt-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Training Process & Strategy</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-slate-900 mb-3">Data Preprocessing</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h5 className="font-medium text-slate-900 mb-2">Feature Engineering</h5>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• 247 features extracted</li>
                      <li>• Polynomial interactions</li>
                      <li>• Temporal features (day/month/year)</li>
                      <li>• Geospatial clustering</li>
                      <li>• Text embeddings (descriptions)</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h5 className="font-medium text-slate-900 mb-2">Data Augmentation</h5>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• SMOTE for rare property types</li>
                      <li>• Synthetic minority oversampling</li>
                      <li>• Image augmentation (rotation, flip)</li>
                      <li>• Price bracketing normalization</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h5 className="font-medium text-slate-900 mb-2">Train/Val/Test Split</h5>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Training: 70% (13.1M records)</li>
                      <li>• Validation: 15% (2.8M records)</li>
                      <li>• Test: 15% (2.8M records)</li>
                      <li>• Stratified by emirate & property type</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-3">Model Architecture</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
                    <h5 className="font-medium text-slate-900 mb-2">Ensemble Components</h5>
                    <ol className="text-sm text-slate-700 space-y-1 list-decimal list-inside">
                      <li>XGBoost (Gradient Boosting) - Weight: 0.30</li>
                      <li>LightGBM (Fast Gradient Boosting) - Weight: 0.25</li>
                      <li>Random Forest - Weight: 0.15</li>
                      <li>Neural Network (5-layer MLP) - Weight: 0.15</li>
                      <li>LSTM (Time Series) - Weight: 0.10</li>
                      <li>Ridge Regression (Linear Baseline) - Weight: 0.05</li>
                    </ol>
                  </div>
                  <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
                    <h5 className="font-medium text-slate-900 mb-2">Training Infrastructure</h5>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>
                        • <strong>Hardware:</strong> 8x NVIDIA A100 GPUs
                      </li>
                      <li>
                        • <strong>Framework:</strong> PyTorch + TensorFlow
                      </li>
                      <li>
                        • <strong>Distributed:</strong> Horovod for multi-GPU
                      </li>
                      <li>
                        • <strong>Training Time:</strong> 48 hours full retrain
                      </li>
                      <li>
                        • <strong>Incremental:</strong> Daily updates (4 hours)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-3">Training Optimization</h4>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h5 className="font-medium text-slate-900 mb-2">Loss Functions</h5>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• MAPE (primary)</li>
                        <li>• Huber loss (robust)</li>
                        <li>• Custom weighted MSE</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-slate-900 mb-2">Optimization</h5>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• AdamW optimizer</li>
                        <li>• Learning rate: 3e-4</li>
                        <li>• Cosine annealing</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-slate-900 mb-2">Regularization</h5>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• L2 penalty (0.001)</li>
                        <li>• Dropout (0.3)</li>
                        <li>• Early stopping (patience=10)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Hyperparameter Tuning */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Hyperparameter Tuning Strategy</h2>
          <HyperparameterTuningDiagram />
          <Card className="p-6 mt-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Automated Hyperparameter Optimization</h3>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-slate-50 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-3">Optimization Framework</h4>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li>
                      • <strong>Primary:</strong> Optuna (Bayesian Optimization)
                    </li>
                    <li>
                      • <strong>Secondary:</strong> Hyperopt (Tree-structured Parzen)
                    </li>
                    <li>
                      • <strong>Search Space:</strong> 45 hyperparameters
                    </li>
                    <li>
                      • <strong>Trials:</strong> 500 iterations per model
                    </li>
                    <li>
                      • <strong>Pruning:</strong> Median-based early stopping
                    </li>
                  </ul>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-3">Resource Allocation</h4>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li>
                      • <strong>Budget:</strong> 200 GPU hours per experiment
                    </li>
                    <li>
                      • <strong>Parallel Trials:</strong> 8 simultaneous runs
                    </li>
                    <li>
                      • <strong>Duration:</strong> 5-7 days complete sweep
                    </li>
                    <li>
                      • <strong>Frequency:</strong> Monthly full tuning
                    </li>
                    <li>
                      • <strong>Quick Tuning:</strong> Weekly top-10 params
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-3">XGBoost Hyperparameter Space</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="text-left p-3 font-semibold text-slate-900">Parameter</th>
                        <th className="text-left p-3 font-semibold text-slate-900">Search Range</th>
                        <th className="text-left p-3 font-semibold text-slate-900">Optimal Value</th>
                        <th className="text-left p-3 font-semibold text-slate-900">Impact</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr>
                        <td className="p-3 text-slate-700">max_depth</td>
                        <td className="p-3 text-slate-600">[3, 12]</td>
                        <td className="p-3 font-medium text-teal-600">8</td>
                        <td className="p-3 text-slate-600">High - Controls overfitting</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-slate-700">learning_rate</td>
                        <td className="p-3 text-slate-600">[0.001, 0.3]</td>
                        <td className="p-3 font-medium text-teal-600">0.045</td>
                        <td className="p-3 text-slate-600">High - Convergence speed</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-slate-700">n_estimators</td>
                        <td className="p-3 text-slate-600">[100, 2000]</td>
                        <td className="p-3 font-medium text-teal-600">850</td>
                        <td className="p-3 text-slate-600">Medium - Model capacity</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-slate-700">subsample</td>
                        <td className="p-3 text-slate-600">[0.5, 1.0]</td>
                        <td className="p-3 font-medium text-teal-600">0.82</td>
                        <td className="p-3 text-slate-600">Medium - Regularization</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-slate-700">colsample_bytree</td>
                        <td className="p-3 text-slate-600">[0.5, 1.0]</td>
                        <td className="p-3 font-medium text-teal-600">0.75</td>
                        <td className="p-3 text-slate-600">Medium - Feature diversity</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-slate-700">min_child_weight</td>
                        <td className="p-3 text-slate-600">[1, 10]</td>
                        <td className="p-3 font-medium text-teal-600">4</td>
                        <td className="p-3 text-slate-600">Low - Leaf optimization</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-slate-700">gamma</td>
                        <td className="p-3 text-slate-600">[0, 5]</td>
                        <td className="p-3 font-medium text-teal-600">0.3</td>
                        <td className="p-3 text-slate-600">Low - Split threshold</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-3">Neural Network Architecture Search</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h5 className="font-medium text-slate-900 mb-2">Layer Configuration</h5>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Layers: [3, 7] → Optimal: 5</li>
                      <li>• Units: [64, 512] → Optimal: [256, 128, 64, 32, 16]</li>
                      <li>• Activation: [ReLU, ELU, SELU] → ELU</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h5 className="font-medium text-slate-900 mb-2">Regularization</h5>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Dropout: [0.1, 0.5] → 0.3</li>
                      <li>• L2: [1e-5, 1e-2] → 0.001</li>
                      <li>• Batch Norm: [Yes/No] → Yes</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h5 className="font-medium text-slate-900 mb-2">Training</h5>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Batch Size: [32, 512] → 128</li>
                      <li>• LR: [1e-5, 1e-2] → 3e-4</li>
                      <li>• Optimizer: [Adam, AdamW] → AdamW</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
                <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                  <Brain className="w-5 h-5 text-teal-600" />
                  Performance Improvements from Tuning
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                  <div>
                    <div className="text-2xl font-bold text-teal-600">-18.5%</div>
                    <div className="text-sm text-slate-700">MAPE Reduction</div>
                    <div className="text-xs text-slate-600">From 3.9% to 3.2%</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-teal-600">+5.8%</div>
                    <div className="text-sm text-slate-700">R² Score Increase</div>
                    <div className="text-xs text-slate-600">From 0.89 to 0.94</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-teal-600">-42ms</div>
                    <div className="text-sm text-slate-700">Inference Speed</div>
                    <div className="text-xs text-slate-600">From 292ms to 250ms</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-3">Continuous Learning Pipeline</h4>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900">Daily Incremental Training</h5>
                        <p className="text-sm text-slate-600">
                          Models retrained nightly with previous day's data. Hyperparameters fixed, weights updated via
                          warm-start.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900">Weekly Quick Tuning</h5>
                        <p className="text-sm text-slate-600">
                          Top 10 most impactful hyperparameters re-optimized using 50 trials. Takes ~6 hours on
                          validation set.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900">Monthly Full Sweep</h5>
                        <p className="text-sm text-slate-600">
                          Complete hyperparameter search across all 45 parameters. 500 trials with 8 parallel workers
                          over 5-7 days.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900">Quarterly Architecture Search</h5>
                        <p className="text-sm text-slate-600">
                          Neural architecture search (NAS) explores new model structures. Evaluates alternative ensemble
                          compositions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Technology Stack */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Database className="w-6 h-6 text-teal-600" />
                Languages
              </h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Python 3.11 (Data Science)</li>
                <li>• TypeScript 5.2 (Frontend)</li>
                <li>• JavaScript ES2023</li>
                <li>• SQL (PostgreSQL 15)</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Brain className="w-6 h-6 text-teal-600" />
                ML Frameworks
              </h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• TensorFlow 2.14</li>
                <li>• PyTorch 2.1</li>
                <li>• scikit-learn 1.3</li>
                <li>• XGBoost 2.0 & LightGBM</li>
                <li>• Pandas & NumPy</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Network className="w-6 h-6 text-teal-600" />
                Data Infrastructure
              </h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• PostgreSQL 15 (OLTP)</li>
                <li>• Redis 7.2 (Caching)</li>
                <li>• Apache Airflow 2.7 (ETL)</li>
                <li>• Delta Lake 3.0 (Warehouse)</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Cpu className="w-6 h-6 text-teal-600" />
                ML Techniques
              </h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Gradient Boosting (XGBoost)</li>
                <li>• LSTM Networks</li>
                <li>• Ensemble Methods</li>
                <li>• Feature Engineering</li>
                <li>• Hyperparameter Tuning</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6 text-teal-600" />
                DevOps & Deployment
              </h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Docker 24.0 Containers</li>
                <li>• Kubernetes 1.28</li>
                <li>• GitHub Actions (CI/CD)</li>
                <li>• Prometheus & Grafana</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Lock className="w-6 h-6 text-teal-600" />
                Security & Privacy
              </h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• OAuth2.0 Authentication</li>
                <li>• JWT Token Authorization</li>
                <li>• AES-256 Encryption</li>
                <li>• GDPR Compliance</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="p-12 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Explore the Platform?</h2>
            <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
              Experience the power of enterprise ML infrastructure for real estate investment decisions
            </p>
            <Link href="/dashboard" className="inline-block px-6 py-3 text-white bg-teal-600 rounded hover:bg-teal-700">
              View Dashboard
            </Link>
          </Card>
        </section>
      </div>
    </main>
  )
}
