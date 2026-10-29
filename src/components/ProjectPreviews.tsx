import { Database, ShieldCheck, MapPin, AlertCircle, CheckCircle2, Terminal, Layers } from 'lucide-react';

export const LeadFlowPreview: React.FC = () => {
  return (
    <div className="preview-container">
      <div className="preview-chrome">
        <div className="preview-dots">
          <span></span><span></span><span></span>
        </div>
        <div className="preview-address-bar font-mono">
          leadflow.app/campaigns/q4-outreach
        </div>
        <div className="preview-tag font-mono">
          <Layers size={11} /> Prisma + PostgreSQL
        </div>
      </div>

      <div className="preview-inner care-preview-grid">
        <div className="care-sidebar">
          <div className="preview-mini-header font-mono">CAMPAIGN PIPELINE</div>
          <div className="dispatch-badge dispatch-success font-mono">
            <CheckCircle2 size={12} /> CAMPAIGN ACTIVE
          </div>
          <div className="dispatch-item active">
            <div className="dispatch-title">Enterprise Cloud Q4</div>
            <div className="dispatch-meta font-mono">142 Leads &bull; 28.4% Conv.</div>
          </div>
          <div className="dispatch-item">
            <div className="dispatch-title">SaaS Inbound Sequence</div>
            <div className="dispatch-meta font-mono">89 Leads &bull; 34.1% Conv.</div>
          </div>
        </div>

        <div className="care-main">
          <div className="care-status-row">
            <div className="care-stat-card">
              <span className="care-stat-label">Total Leads</span>
              <span className="care-stat-val font-mono">231 Contacts</span>
            </div>
            <div className="care-stat-card">
              <span className="care-stat-label">Pipeline Value</span>
              <span className="care-stat-val font-mono">$48,200 Projected</span>
            </div>
            <div className="care-stat-card">
              <span className="care-stat-label">Prisma Query Time</span>
              <span className="care-stat-val font-mono text-accent">12ms indexed</span>
            </div>
          </div>

          <div className="care-log-terminal font-mono">
            <span className="log-line text-muted">{"[15:32:04] prisma.campaign.findUnique({ where: { slug: 'q4-outreach' } })"}</span>
            <span className="log-line">[15:32:05] Batch status updated: 14 leads progressed to 'Qualified'</span>
            <span className="log-line text-accent">[15:32:05] API Response 200 OK &bull; Synced with React dashboard</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CareConnectPreview: React.FC = () => {
  return (
    <div className="preview-container">
      <div className="preview-chrome">
        <div className="preview-dots">
          <span></span><span></span><span></span>
        </div>
        <div className="preview-address-bar font-mono">
          care-connect.local/dashboard/incidents
        </div>
        <div className="preview-tag font-mono">
          <Database size={11} /> PostgreSQL + Django
        </div>
      </div>
      
      <div className="preview-inner care-preview-grid">
        <div className="care-sidebar">
          <div className="preview-mini-header font-mono">ACTIVE DISPATCH</div>
          <div className="dispatch-badge dispatch-urgent font-mono">
            <AlertCircle size={12} /> LEVEL 1 EMERGENCY
          </div>
          <div className="dispatch-item active">
            <div className="dispatch-title">Station 4 Water Relief</div>
            <div className="dispatch-meta font-mono">Req ID #CC-8492 · Verified</div>
          </div>
          <div className="dispatch-item">
            <div className="dispatch-title">Medical Escort Unit</div>
            <div className="dispatch-meta font-mono">Req ID #CC-8488 · Assigned</div>
          </div>
        </div>

        <div className="care-main">
          <div className="care-status-row">
            <div className="care-stat-card">
              <span className="care-stat-label">Response Cluster</span>
              <span className="care-stat-val font-mono"><MapPin size={13} /> Zone B-South</span>
            </div>
            <div className="care-stat-card">
              <span className="care-stat-label">Assigned Vol. Units</span>
              <span className="care-stat-val font-mono">14 Active Responders</span>
            </div>
            <div className="care-stat-card">
              <span className="care-stat-label">Sync Latency</span>
              <span className="care-stat-val font-mono text-accent">18ms via Django REST</span>
            </div>
          </div>

          <div className="care-log-terminal font-mono">
            <span className="log-line text-muted">[15:02:11] POST /api/v1/relief-requests/ [201 CREATED]</span>
            <span className="log-line">[15:02:14] DB Transact: Allocated 250 units to Sector 3</span>
            <span className="log-line text-accent">[15:02:15] Webhook dispatched to React Client — State: SYNCHRONIZED</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TransitRescuePreview: React.FC = () => {
  return (
    <div className="preview-container">
      <div className="preview-chrome">
        <div className="preview-dots">
          <span></span><span></span><span></span>
        </div>
        <div className="preview-address-bar font-mono">
          transit-rescue.ai/route-matrix/evaluate
        </div>
        <div className="preview-tag font-mono">
          <ShieldCheck size={11} /> JWT Authenticated
        </div>
      </div>

      <div className="preview-inner transit-preview-layout">
        <div className="transit-top-status">
          <div className="incident-alert font-mono">
            <AlertCircle size={13} className="text-warning" />
            <span>INCIDENT #TR-209: Rail Line Express Disruption detected</span>
          </div>
          <span className="tag font-mono">DRF Service v2.1</span>
        </div>

        <div className="transit-matrix-cards">
          <div className="route-opt-card route-original">
            <div className="route-header font-mono">ORIGINAL ROUTE (BLOCKED)</div>
            <div className="route-detail">Express Transit 104 &bull; ETA 18:45</div>
            <div className="route-status text-danger font-mono">Suspended &mdash; Signal Malfunction</div>
          </div>

          <div className="route-opt-card route-recommended">
            <div className="route-header font-mono text-accent">
              <CheckCircle2 size={12} style={{ display: 'inline', marginRight: 4 }} />
              RECOVERY ROUTE OPTION A
            </div>
            <div className="route-detail">Bypass Shuttles &rarr; Metro Line Green &bull; ETA 19:02</div>
            <div className="route-status text-accent font-mono">94% Confidence &bull; +17 min delay minimal</div>
          </div>
        </div>

        <div className="transit-bottom-footer font-mono">
          <span>Auth Token: Bearer eyJhbGci... [VALID]</span>
          <span>PostgreSQL Geo Query: 32ms</span>
        </div>
      </div>
    </div>
  );
};

export const ApiPlatformPreview: React.FC = () => {
  return (
    <div className="preview-container">
      <div className="preview-chrome">
        <div className="preview-dots">
          <span></span><span></span><span></span>
        </div>
        <div className="preview-address-bar font-mono">
          api-monitor.cli/suite/reliability-test
        </div>
        <div className="preview-tag font-mono">
          <Terminal size={11} /> Python Test Suite
        </div>
      </div>

      <div className="preview-inner api-preview-inner font-mono">
        <div className="api-test-header">
          <span>RUN: test_endpoints_contract_validation.py</span>
          <span className="text-accent font-bold">ALL 12 TESTS PASSED (100%)</span>
        </div>

        <div className="api-test-list">
          <div className="api-test-row">
            <span className="status-badge passed">PASS</span>
            <span className="test-name">GET /api/v2/health-check</span>
            <span className="test-metric">HTTP 200 OK &bull; 14ms</span>
          </div>
          <div className="api-test-row">
            <span className="status-badge passed">PASS</span>
            <span className="test-name">POST /api/v2/orders/payload-validation</span>
            <span className="test-metric">Schema Validated &bull; 26ms</span>
          </div>
          <div className="api-test-row">
            <span className="status-badge passed">PASS</span>
            <span className="test-name">SQL Assert: orders_ledger balance consistency</span>
            <span className="test-metric">Zero Inconsistencies &bull; 31ms</span>
          </div>
          <div className="api-test-row">
            <span className="status-badge passed">PASS</span>
            <span className="test-name">RATE-LIMIT: Concurrency stress (50 req/sec)</span>
            <span className="test-metric">0 Drops &bull; 429 Header Validated</span>
          </div>
        </div>

        <div className="api-summary-strip">
          <span>Ran 12 checks in 0.384s</span>
          <span>Coverage: 100% of defined schemas</span>
          <span>Report: reports/2026-10-suite.md</span>
        </div>
      </div>
    </div>
  );
};
