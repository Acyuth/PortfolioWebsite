import type { Project } from "@/lib/types";

/**
 * Case study content.
 *
 * Rule for editing: every result, metric, and responsibility here comes from the
 * résumé. Anything not yet supplied is a `placeholder` block so the page stays
 * honest until the real detail is added.
 */
export const projects: Project[] = [
  {
    slug: "hdfc-credit-risk-analytics",
    index: "01",
    org: "HDFC Bank",
    title: "Credit risk analytics and suspect mule identification",
    role: "Credit Risk Analytics and Innovation Intern",
    period: "May — Jul 2025",
    domain: "Banking · Risk",
    summary:
      "Transaction behaviour analysis, money mule pattern identification, and executive risk reporting for the bank's credit risk innovation team.",
    standfirst:
      "An internship inside HDFC Bank's Credit Risk Analytics and Innovation (CRAIN) function, analysing transaction behaviour across a large student account population to surface money mule patterns and put the findings in front of risk leadership.",
    tools: ["Python", "pandas", "Excel", "Power BI", "Statistical modelling"],
    featured: true,
    sections: {
      problem: [
        {
          kind: "text",
          value:
            "Money mule accounts are ordinary-looking accounts used to move funds on behalf of someone else, which makes them hard to separate from legitimate activity by rule-based review alone. The credit risk team needed a way to identify suspected mule behaviour inside a large student account population, and needed the result in a form that risk leadership could act on rather than a one-off analysis.",
        },
      ],
      context: [
        {
          kind: "text",
          value:
            "The work sat with the Credit Risk Analytics and Innovation (CRAIN) team at HDFC Bank in Chennai. Two constraints shaped it. First, feature engineering on transaction data was slow, which limited how quickly the team could test a hypothesis. Second, any finding had to be legible to a leadership audience that owns risk strategy and policy, not only to analysts.",
        },
        {
          kind: "facts",
          items: [
            { label: "Function", value: "Credit Risk Analytics & Innovation (CRAIN)" },
            { label: "Engagement", value: "Internship, May — Jul 2025" },
            { label: "Audience", value: "CRAIN leadership team" },
          ],
        },
      ],
      data: [
        {
          kind: "text",
          value:
            "Student account datasets covering transaction behaviour, at a volume of more than 150,000 records.",
        },
        {
          kind: "facts",
          items: [
            { label: "Scale", value: "150,000+ records" },
            { label: "Subject", value: "Student account transaction behaviour" },
          ],
        },
        {
          kind: "placeholder",
          value:
            "Source systems, table grain, observation window, and field-level detail to be added. Underlying data is proprietary to the bank and is not reproduced here.",
        },
      ],
      approach: [
        {
          kind: "list",
          items: [
            "Built scalable data wrangling pipelines in pandas and Excel so transaction behaviour could be reshaped and re-tested quickly, rather than rebuilt for each question.",
            "Applied statistical modelling across the account population to isolate behavioural patterns consistent with money mule activity.",
            "Translated the resulting risk signals into dashboards designed for a leadership audience, so the analysis fed a decision rather than a report.",
          ],
        },
      ],
      tools: [
        {
          kind: "facts",
          items: [
            { label: "Analysis", value: "Python, pandas, Excel" },
            { label: "Method", value: "Statistical modelling, feature engineering" },
            { label: "Reporting", value: "Power BI" },
          ],
        },
      ],
      analysis: [
        {
          kind: "text",
          value:
            "The analytical work had two halves. The first was making the data tractable: wrangling pipelines that took raw transaction behaviour into a modelling-ready shape, which is where the efficiency gain for the team came from. The second was pattern identification — using statistical modelling over 150,000+ records to find mule behaviour that was not visible at the level of an individual account.",
        },
        {
          kind: "placeholder",
          value:
            "Feature definitions, model specification, and validation approach to be added.",
        },
      ],
      visualizations: [
        {
          kind: "text",
          value:
            "Three custom Power BI dashboards were designed to carry the risk insights to the CRAIN leadership team.",
        },
        {
          kind: "figure",
          caption:
            "Power BI risk dashboard — screenshot or redacted mock to be added.",
        },
        {
          kind: "placeholder",
          value:
            "Dashboard views cannot be published as-is. A redacted or synthetic version will be added in place of the live screens.",
        },
      ],
      results: [
        {
          kind: "list",
          items: [
            "30% improvement in feature engineering efficiency for the credit risk team.",
            "Identified previously hidden money mule patterns across 150,000+ student records.",
            "Reduced potential institutional risk exposure by an estimated 15%.",
            "Three Power BI dashboards delivered to CRAIN leadership.",
            "Two institutional risk strategy and policy adjustments followed from the insights.",
          ],
        },
      ],
      implications: [
        {
          kind: "text",
          value:
            "The practical value was not the model on its own — it was that the findings reached the people who set risk policy and changed two of those policies. Faster feature engineering compounds the same way: it shortens the loop between a risk hypothesis and an answer, which matters more in fraud work than in most analytics, because the behaviour being detected keeps moving.",
        },
      ],
      limitations: [
        {
          kind: "list",
          items: [
            "The 15% reduction in potential risk exposure is an estimate of exposure avoided, not an audited financial outcome.",
            "Findings are specific to a student account population and should not be assumed to transfer to other segments without revalidation.",
          ],
        },
        {
          kind: "placeholder",
          value:
            "Data quality constraints, class imbalance handling, and known false-positive behaviour to be added.",
        },
      ],
      takeaways: [
        {
          kind: "list",
          items: [
            "Fraud analytics is a detection problem constrained by review capacity — precision matters as much as coverage, because every flag costs an investigator's time.",
            "Investing in the pipeline before the model was what made iteration possible at all.",
            "An analysis only changes policy if it is delivered in the format the decision-maker already works in. The dashboards were the deliverable, not a by-product.",
          ],
        },
      ],
    },
  },
  {
    slug: "indium-compliance-intelligence",
    index: "02",
    org: "Indium Software",
    title: "Retrieval-augmented intelligence for compliance review",
    role: "Data & AI Intern",
    period: "Jun — Sep 2024",
    domain: "Enterprise AI · Process",
    summary:
      "An LLM retrieval prototype that turned 2,500+ unstructured compliance documents into a queryable source of business insight.",
    standfirst:
      "A prototype built during a Data & AI internship at Indium Software, applying retrieval-augmented generation to a compliance document backlog so that business questions could be answered without reading every file by hand.",
    tools: [
      "Python",
      "LLMs",
      "Retrieval-augmented generation",
      "Vector database",
      "Prompt optimisation",
    ],
    featured: true,
    sections: {
      problem: [
        {
          kind: "text",
          value:
            "Compliance knowledge was sitting in more than 2,500 unstructured documents. Answering a business question against that corpus meant manual review, which made it slow, inconsistent between reviewers, and impossible to scale as the document count grew.",
        },
      ],
      context: [
        {
          kind: "text",
          value:
            "Indium Software delivers digital engineering and enterprise AI services, so the question was not only whether retrieval could work but whether it could be trusted by the teams that would rely on it. A compliance context raises the cost of a confident wrong answer, which made validation part of the build rather than a step after it.",
        },
        {
          kind: "facts",
          items: [
            { label: "Team", value: "Data & AI" },
            { label: "Engagement", value: "Internship, Jun — Sep 2024" },
            { label: "Consumers", value: "Three cross-functional teams" },
          ],
        },
      ],
      data: [
        {
          kind: "facts",
          items: [
            { label: "Corpus", value: "2,500+ unstructured compliance documents" },
            { label: "Legacy migration", value: "5 GB of legacy text data" },
            { label: "Store", value: "Vector database" },
          ],
        },
        {
          kind: "placeholder",
          value:
            "Document types, chunking strategy, and embedding model to be added. Client documents are confidential and are not reproduced here.",
        },
      ],
      approach: [
        {
          kind: "list",
          items: [
            "Built an automated ingestion framework to clean, validate, and migrate legacy text into a vector store, so retrieval quality did not depend on manual preparation.",
            "Engineered a retrieval-augmented generation prototype that grounded LLM responses in the retrieved compliance documents rather than in model memory.",
            "Ran structured validation and prompt optimisation to minimise hallucination before the prototype was put in front of business teams.",
          ],
        },
      ],
      tools: [
        {
          kind: "facts",
          items: [
            { label: "Core", value: "Python, LLMs, retrieval-augmented generation" },
            { label: "Storage", value: "Vector database" },
            { label: "Quality", value: "LLM validation, prompt optimisation" },
          ],
        },
        {
          kind: "placeholder",
          value:
            "Specific model, orchestration framework, and vector database to be confirmed.",
        },
      ],
      analysis: [
        {
          kind: "text",
          value:
            "Two things had to be measured, not assumed. First, retrieval performance: whether the framework returned the right passages fast enough for a person to use it in the flow of work. Second, answer reliability: how often the grounded output could be accepted without falling back to the source document. Prompt optimisation was evaluated against that second measure rather than judged by inspection.",
        },
        {
          kind: "placeholder",
          value:
            "Evaluation set construction and scoring methodology to be added.",
        },
      ],
      visualizations: [
        {
          kind: "figure",
          caption:
            "Ingestion and retrieval architecture diagram — to be added.",
        },
        {
          kind: "figure",
          caption:
            "Retrieval latency and answer-accuracy comparison — to be added.",
        },
      ],
      results: [
        {
          kind: "list",
          items: [
            "Automated extraction of business insight from 2,500+ unstructured compliance documents.",
            "Saved 15 hours of manual review per week.",
            "Migrated 5 GB of legacy text data into a scalable vector database.",
            "40% acceleration in retrieval for complex business queries.",
            "88% accurate, deployable application of the AI output across three cross-functional teams.",
          ],
        },
      ],
      implications: [
        {
          kind: "text",
          value:
            "Fifteen hours a week is the part a business reads first: review capacity returned to three teams without adding headcount. The more durable outcome is structural — once the corpus is ingested and queryable, each new compliance question costs a query instead of a review cycle, and the marginal cost of asking keeps falling as the corpus grows.",
        },
        {
          kind: "text",
          value:
            "The 88% figure is also a governance statement, not just a score. It defines where a human still has to sign off, which is what makes the tool deployable in a compliance setting at all.",
        },
      ],
      limitations: [
        {
          kind: "list",
          items: [
            "The system was a prototype, not a production deployment.",
            "At 88% accuracy the output supports review rather than replacing it; compliance decisions still require human verification.",
            "Performance is tied to this document corpus and would need revalidation on a different one.",
          ],
        },
        {
          kind: "placeholder",
          value:
            "Observed failure modes and residual hallucination behaviour to be added.",
        },
      ],
      takeaways: [
        {
          kind: "list",
          items: [
            "Most of the value came from the unglamorous half — cleaning, validating, and migrating the corpus. Retrieval quality is bounded by ingestion quality.",
            "In a regulated workflow, a measured accuracy ceiling is more useful than an impressive demo, because it tells you where the human belongs.",
            "Framing the win as hours of review returned, rather than as model performance, is what made the prototype legible to business teams.",
          ],
        },
      ],
    },
  },
  {
    slug: "nimhans-tbi-deep-learning",
    index: "03",
    org: "VIT · NIMHANS collaboration",
    title: "Deep learning for traumatic brain injury outcome prediction",
    role: "Project lead, 3-person technical team",
    period: "Jun — Dec 2025",
    domain: "Healthcare · Decision support",
    summary:
      "A Vision Transformer model predicting traumatic brain injury outcomes from CT scans, built to produce interpretable evidence a clinician can use.",
    standfirst:
      "A faculty-supervised collaboration with NIMHANS predicting traumatic brain injury outcomes from CT imaging. The design constraint was interpretability: a prediction is only useful in a clinical setting if the reasoning behind it can be inspected.",
    tools: [
      "PyTorch",
      "Vision Transformer",
      "Triplet Attention",
      "Computer vision",
      "Stratified sampling",
    ],
    featured: true,
    sections: {
      problem: [
        {
          kind: "text",
          value:
            "Traumatic brain injury outcomes have to be assessed early, from imaging, under time pressure. The task is also not a single yes-or-no call — several findings can be present at once, which makes it a multi-label problem rather than a simple classification. The goal was to predict TBI outcomes from CT scans accurately enough to be informative, and transparently enough to be examined.",
        },
      ],
      context: [
        {
          kind: "text",
          value:
            "The project ran at Vellore Institute of Technology in collaboration with NIMHANS, under faculty supervision. In a clinical decision support setting the model is not the decision-maker; a clinician is. That reframes what counts as a good result — an accurate but opaque prediction is worth less than one a clinician can interrogate against what they already see in the scan.",
        },
        {
          kind: "facts",
          items: [
            { label: "Collaboration", value: "VIT with NIMHANS" },
            { label: "Team", value: "Directed a 3-person technical team" },
            { label: "Supervision", value: "Faculty supervised" },
            { label: "Period", value: "Jun — Dec 2025" },
          ],
        },
      ],
      data: [
        {
          kind: "facts",
          items: [
            { label: "Modality", value: "CT scans" },
            { label: "Task", value: "Multi-label outcome classification" },
          ],
        },
        {
          kind: "placeholder",
          value:
            "Cohort size, label definitions, class distribution, and acquisition detail to be added. Clinical imaging data is not reproduced here.",
        },
      ],
      approach: [
        {
          kind: "list",
          items: [
            "Developed a Vision Transformer augmented with Triplet Attention to predict TBI outcomes from CT imaging.",
            "Framed the task as multi-label classification, so co-occurring findings could be predicted together rather than forced into one class.",
            "Validated performance using stratified sampling to keep label distribution consistent across splits.",
            "Generated attention heatmaps so the regions driving a prediction could be reviewed rather than taken on trust.",
          ],
        },
      ],
      tools: [
        {
          kind: "facts",
          items: [
            { label: "Modelling", value: "PyTorch, Vision Transformer, Triplet Attention" },
            { label: "Validation", value: "Stratified sampling" },
            { label: "Interpretability", value: "Attention heatmaps" },
          ],
        },
      ],
      analysis: [
        {
          kind: "text",
          value:
            "Evaluation used AUC-ROC, which suits a multi-label clinical problem better than accuracy: it reads performance across decision thresholds instead of fixing one, and it is not flattered by imbalanced labels. Stratified sampling kept the label mix stable across splits so the reported figure reflected the model rather than a favourable partition. Attention heatmaps were treated as part of the analysis, since agreement between the model's attention and clinically meaningful regions is itself evidence.",
        },
        {
          kind: "placeholder",
          value:
            "Per-label performance breakdown and ablation results for the Triplet Attention component to be added.",
        },
      ],
      visualizations: [
        {
          kind: "figure",
          caption:
            "Attention heatmap overlays on CT slices — anonymised examples to be added.",
        },
        {
          kind: "figure",
          caption: "Per-label ROC curves — to be added.",
        },
      ],
      results: [
        {
          kind: "list",
          items: [
            "0.91 AUC-ROC for TBI outcome prediction across a multi-label classification framework.",
            "Interpretable attention heatmaps generated to support clinical decision-making.",
            "Directed a 3-person technical team under faculty supervision, including validation via stratified sampling.",
          ],
        },
      ],
      implications: [
        {
          kind: "text",
          value:
            "The heatmaps are what make this usable rather than merely accurate. They give a clinician something to agree or disagree with, which is the difference between decision support and a black box — and in practice it is also what determines whether a model like this is trusted enough to be looked at twice.",
        },
        {
          kind: "text",
          value:
            "The same principle carries directly into regulated commercial settings such as credit and fraud, where a model that cannot explain itself is difficult to adopt regardless of how well it scores.",
        },
      ],
      limitations: [
        {
          kind: "list",
          items: [
            "Research-stage work conducted under faculty supervision; not a validated clinical tool.",
            "Performance is reported on the study data and would need external validation before any clinical claim.",
            "Attention heatmaps indicate where the model attends, which is not the same as a causal explanation of the outcome.",
          ],
        },
        {
          kind: "placeholder",
          value:
            "Cohort limitations, label noise, and generalisability constraints to be added.",
        },
      ],
      takeaways: [
        {
          kind: "list",
          items: [
            "Interpretability was a requirement, not a nice-to-have — it decided the architecture.",
            "Metric choice is a modelling decision: AUC-ROC and stratified validation were selected because the label distribution would have made accuracy misleading.",
            "Leading a small technical team meant most of the work was sequencing and validating other people's contributions, not writing all the code.",
          ],
        },
      ],
    },
  },
  {
    slug: "toll-traffic-stress-assessment",
    index: "04",
    org: "Vellore Institute of Technology",
    title: "Toll traffic behaviour and driver stress assessment",
    role: "Capstone project",
    period: "Dec 2025 — May 2026",
    domain: "Safety analytics · Computer vision",
    summary:
      "A dual-stream vision model relating toll congestion to driver stress, benchmarked across ten architectures for edge deployment.",
    standfirst:
      "An undergraduate capstone at VIT investigating whether congestion at toll infrastructure can be linked to driver stress, with the goal of a single safety index that could run on edge hardware at the toll plaza itself.",
    tools: ["YOLOv8", "VGG16", "PyTorch", "Computer vision", "Model benchmarking"],
    featured: false,
    sections: {
      problem: [
        {
          kind: "text",
          value:
            "Accidents cluster after congestion clears, which suggests the congestion itself leaves a behavioural trace in the driver. The project asked whether that trace is measurable from what a toll plaza can already observe, and whether it could be expressed as one safety index rather than a set of disconnected signals.",
        },
      ],
      context: [
        {
          kind: "text",
          value:
            "This was a capstone project at Vellore Institute of Technology. The practical constraint was deployment: anything intended to run on live toll infrastructure has to fit within edge hardware limits, which makes the accuracy-versus-efficiency trade-off a design requirement rather than an afterthought.",
        },
        {
          kind: "facts",
          items: [
            { label: "Type", value: "Undergraduate capstone" },
            { label: "Period", value: "Dec 2025 — May 2026" },
            { label: "Target", value: "Edge deployment on toll infrastructure" },
          ],
        },
      ],
      data: [
        {
          kind: "facts",
          items: [
            { label: "Scale", value: "22,000+ image dataset" },
            { label: "Protocol", value: "Strict subject-disjoint evaluation" },
          ],
        },
        {
          kind: "placeholder",
          value:
            "Dataset sources, subject counts, and labelling procedure to be added.",
        },
      ],
      approach: [
        {
          kind: "list",
          items: [
            "Engineered a dual-stream framework: YOLOv8 for traffic extraction and VGG16 to relate congestion to driver stress.",
            "Benchmarked ten distinct architectures under a strict subject-disjoint protocol to locate the accuracy–efficiency frontier.",
            "Established baseline parameters required for edge deployment on live toll infrastructure.",
            "Worked toward fusing vehicle kinematics and behavioural biometrics into a unified safety index.",
          ],
        },
      ],
      tools: [
        {
          kind: "facts",
          items: [
            { label: "Detection", value: "YOLOv8" },
            { label: "Classification", value: "VGG16" },
            { label: "Evaluation", value: "Subject-disjoint benchmarking across 10 architectures" },
          ],
        },
      ],
      analysis: [
        {
          kind: "text",
          value:
            "The subject-disjoint protocol was the methodological centre of the work. Without it a model can score well by recognising individuals rather than learning stress, so enforcing disjoint subjects across splits is what makes the reported number mean anything. Benchmarking ten architectures then turned model selection into an explicit trade-off rather than a single choice defended after the fact.",
        },
      ],
      visualizations: [
        {
          kind: "figure",
          caption:
            "Accuracy versus efficiency frontier across the ten benchmarked architectures — to be added.",
        },
        {
          kind: "figure",
          caption: "Dual-stream pipeline diagram — to be added.",
        },
      ],
      results: [
        {
          kind: "list",
          items: [
            "Benchmarked 10 distinct architectures on a 22,000+ image dataset under a strict subject-disjoint protocol.",
            "Achieved 94.58% peak validation accuracy.",
            "Established the baseline parameters required for edge deployment on live toll infrastructure.",
          ],
        },
      ],
      implications: [
        {
          kind: "text",
          value:
            "If congestion-linked driver stress can be measured from infrastructure that already exists, mitigation becomes an operational lever rather than a capital project — signage, lane management, or timing adjustments at the points where risk concentrates. Establishing the edge deployment baseline is what separates that from a purely academic result.",
        },
      ],
      limitations: [
        {
          kind: "list",
          items: [
            "Validation accuracy is measured on the study dataset, not in live toll operation.",
            "The unified safety index was the design goal of the framework rather than a validated instrument.",
            "Inferring stress from visual signals is an indirect measure and carries assumptions that need scrutiny before any operational use.",
          ],
        },
        {
          kind: "placeholder",
          value: "Deployment testing results and failure analysis to be added.",
        },
      ],
      takeaways: [
        {
          kind: "list",
          items: [
            "How you split the data can matter more than which model you pick; the subject-disjoint protocol was the difference between a real result and an inflated one.",
            "Benchmarking breadth turned an architecture decision into a documented trade-off that someone else can revisit.",
            "Designing against the deployment constraint from the start kept the result usable rather than only publishable.",
          ],
        },
      ],
    },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const additionalProjects = projects.filter((project) => !project.featured);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  return {
    previous: index > 0 ? projects[index - 1] : undefined,
    next: index >= 0 && index < projects.length - 1 ? projects[index + 1] : undefined,
  };
}
