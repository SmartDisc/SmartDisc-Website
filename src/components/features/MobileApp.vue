<script setup>
import IosFrame from './IosFrame.vue'
import AndroidFrame from './AndroidFrame.vue'
import LIcon from '@/components/ui/LIcon.vue'

const props = defineProps({
  screen: { type: String, default: 'discs' },
  width: { type: Number, default: 360 },
  platform: { type: String, default: 'ios' }, // 'ios' | 'android'
})

const aspect = props.platform === 'ios' ? 874 / 402 : 892 / 412
const h = Math.round(props.width * aspect)

const discs = [
  { name: 'Sky Hammer', uuid: 'SD-7F3A-9C2E-04B1', throws: 142, longest: 41, players: 3, fav: true },
  { name: 'Night Owl',  uuid: 'SD-22B8-71D0-9AAC', throws: 84,  longest: 36, players: 1, fav: false },
  { name: 'Daybreak',   uuid: 'SD-9E12-4A33-B071', throws: 121, longest: 43, players: 4, fav: true },
]
const throws = [
  { n: 'Backhand to Mia', t: 'Today · 14:32', d: 38, fav: true, auto: false },
  { n: '14:29',           t: 'Today · 14:29', d: 22, fav: false, auto: true },
  { n: 'Long huck',       t: 'Today · 14:21', d: 41, fav: true, auto: false },
  { n: 'Flick cross-field', t: 'Today · 13:55', d: 33, fav: false, auto: false },
]
const shared = [
  { name: 'Team Disc — Reds',    owner: 'Mia Chen',       longest: 44, throws: 96 },
  { name: 'Practice — Bogotá',  owner: 'Diego Marín',    longest: 38, throws: 64 },
  { name: 'Layout sessions',    owner: 'Hana Watanabe',  longest: 35, throws: 51 },
]
const bars = [60, 80, 45, 95, 70, 88, 55, 72, 92, 64, 76, 50]
</script>

<template>
  <div :style="{ width: width+'px', height: h+'px', position:'relative' }">
    <IosFrame v-if="platform === 'ios'" :width="width" :height="h">
      <!-- My Discs screen -->
      <template v-if="screen === 'discs'">
        <div style="position:absolute;inset:0;overflow:hidden;background:var(--paper)">
          <div style="position:absolute;width:280px;height:280px;left:-90px;top:-50px;border-radius:50%;background:radial-gradient(circle,rgba(111,147,181,.6),transparent 62%)"/>
          <div style="position:absolute;width:240px;height:240px;right:-80px;top:100px;border-radius:50%;background:radial-gradient(circle,rgba(222,195,140,.55),transparent 60%)"/>
          <div style="position:relative;z-index:1;height:100%;padding:60px 18px 100px;display:flex;flex-direction:column;gap:16px;font-family:var(--font-body);color:var(--ink)">
            <!-- app bar -->
            <div style="display:flex;align-items:center;gap:10px">
              <span style="display:inline-flex;align-items:center;gap:8px">
                <img src="/SmartDisc_Mark.png" alt="" style="width:26px;height:26px"/>
                <span style="font-family:var(--font-display);font-weight:700;font-size:13px;letter-spacing:.04em;color:var(--ink)">SMART DISC</span>
              </span>
              <span style="flex:1"/>
              <span style="display:inline-flex;align-items:center;gap:6px;padding:7px 12px;border-radius:999px;background:var(--gold-grad);color:#4a3712;font-family:var(--font-display);font-size:11px;font-weight:600;box-shadow:0 4px 12px rgba(184,146,79,.3)">
                <LIcon name="qr-code" :size="13" :stroke="2"/> Add a disc
              </span>
              <span style="width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,var(--ink-700),var(--ink-900));color:#fff;display:inline-flex;align-items:center;justify-content:center;font-family:var(--font-display);font-weight:600;font-size:12px">AR</span>
            </div>
            <!-- page head -->
            <div>
              <div style="font-family:var(--font-display);font-size:10px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:var(--azure)">Your equipment</div>
              <h2 style="margin:4px 0 4px;font-family:var(--font-display);font-weight:600;font-size:30px;letter-spacing:-.025em;line-height:1.02;color:var(--ink)">My Discs</h2>
              <p style="margin:0;font-family:var(--font-body);font-size:13.5px;color:var(--fg2)">All your discs and their throws, in one place.</p>
            </div>
            <!-- disc cards -->
            <div style="display:flex;flex-direction:column;gap:12px">
              <div v-for="d in discs" :key="d.uuid" style="padding:16px;border-radius:var(--r-lg);background:var(--glass-light-bg);backdrop-filter:var(--glass-blur);-webkit-backdrop-filter:var(--glass-blur);border:1px solid var(--glass-light-border);box-shadow:var(--shadow-glass);display:flex;flex-direction:column;gap:12px">
                <div style="display:flex;align-items:center;gap:12px">
                  <div style="width:44px;height:44px;border-radius:var(--r-sm);background:linear-gradient(140deg,#1d3d72,#0a1c3d);display:flex;align-items:center;justify-content:center;box-shadow:var(--shadow-sm);flex:none">
                    <img src="/SmartDisc_Mark.png" alt="" style="width:32px;height:32px"/>
                  </div>
                  <div style="flex:1;min-width:0">
                    <div style="font-family:var(--font-body);font-weight:600;font-size:17px;color:var(--ink)">{{d.name}}</div>
                    <div style="font-family:var(--font-display);font-size:11px;color:var(--fg3);letter-spacing:.02em">{{d.uuid}}</div>
                  </div>
                  <LIcon name="star" :size="18" :stroke="2" :fill="d.fav ? 'currentColor' : 'none'" :style="{ color: d.fav ? 'var(--gold-500)' : 'var(--mist)' }"/>
                </div>
                <div style="display:flex;gap:20px">
                  <div v-for="s in [{v:d.throws,k:'throws'},{v:d.longest,u:'m',k:'longest'},{v:d.players,k:'players'}]" :key="s.k">
                    <div style="font-family:var(--font-display);font-weight:600;font-size:19px;color:var(--ink);line-height:1;display:inline-flex;align-items:baseline;gap:2px">
                      {{s.v}}<span v-if="s.u" style="font-size:11px;color:var(--fg3);font-weight:500">{{s.u}}</span>
                    </div>
                    <div style="font-family:var(--font-display);font-size:10.5px;color:var(--fg3);margin-top:5px;letter-spacing:.03em">{{s.k}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>

      <!-- Disc detail screen -->
      <template v-else-if="screen === 'detail'">
        <div style="position:absolute;inset:0;overflow:hidden;background:var(--paper)">
          <div style="position:absolute;width:280px;height:280px;left:-90px;top:-50px;border-radius:50%;background:radial-gradient(circle,rgba(111,147,181,.6),transparent 62%)"/>
          <div style="position:absolute;width:240px;height:240px;right:-80px;top:100px;border-radius:50%;background:radial-gradient(circle,rgba(222,195,140,.55),transparent 60%)"/>
          <div style="position:relative;z-index:1;height:100%;padding:60px 18px 100px;display:flex;flex-direction:column;gap:16px;font-family:var(--font-body);color:var(--ink)">
            <!-- app bar -->
            <div style="display:flex;align-items:center;gap:10px">
              <span style="display:inline-flex;align-items:center;gap:4px;font-family:var(--font-display);font-size:14px;color:var(--ink-700);font-weight:500">
                <LIcon name="chevron-left" :size="18" :stroke="2"/> Discs
              </span>
              <span style="flex:1"/>
              <span style="width:32px;height:32px;border-radius:var(--r-sm);display:inline-flex;align-items:center;justify-content:center;background:rgba(16,42,87,.07);color:var(--ink)">
                <LIcon name="share-2" :size="14" :stroke="2"/>
              </span>
              <span style="width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,var(--ink-700),var(--ink-900));color:#fff;display:inline-flex;align-items:center;justify-content:center;font-family:var(--font-display);font-weight:600;font-size:12px">AR</span>
            </div>
            <!-- page head -->
            <div>
              <div style="font-family:var(--font-display);font-size:10px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:var(--azure)">SD-7F3A-9C2E-04B1</div>
              <h2 style="margin:4px 0 4px;font-family:var(--font-display);font-weight:600;font-size:30px;letter-spacing:-.025em;line-height:1.02;color:var(--ink)">Sky Hammer</h2>
              <p style="margin:0;font-family:var(--font-body);font-size:13.5px;color:var(--fg2)">142 throws · 3 players · 1 owner</p>
            </div>
            <!-- stats panel -->
            <div style="padding:14px;border-radius:var(--r-lg);background:var(--glass-light-bg);backdrop-filter:var(--glass-blur);-webkit-backdrop-filter:var(--glass-blur);border:1px solid var(--glass-light-border);box-shadow:var(--shadow-glass)">
              <div style="font-family:var(--font-display);font-weight:600;font-size:11px;color:var(--ink);margin-bottom:10px;display:flex;align-items:center;gap:6px">
                <LIcon name="bar-chart-3" :size="12" :stroke="2"/> Statistics
              </div>
              <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:8px">
                <div v-for="s in [{v:'41',u:'m',k:'longest'},{v:'27',u:'m/s',k:'speed'},{v:'29',u:'m',k:'avg'},{v:'1180',u:'rpm',k:'spin'}]" :key="s.k"
                     style="padding:8px 10px;border-radius:var(--r-sm);background:rgba(255,255,255,.55);border:1px solid rgba(255,255,255,.65)">
                  <div style="font-family:var(--font-display);font-weight:600;font-size:17px;color:var(--ink);display:flex;align-items:baseline;gap:2px;line-height:1">
                    {{s.v}}<span style="font-size:10px;color:var(--fg3);font-weight:500">{{s.u}}</span>
                  </div>
                  <div style="font-family:var(--font-display);font-size:9.5px;color:var(--fg3);margin-top:4px;letter-spacing:.03em">{{s.k}}</div>
                </div>
              </div>
              <div style="display:flex;align-items:flex-end;gap:4px;height:50px;margin-top:12px">
                <span v-for="(bh,bi) in bars" :key="bi" :style="{
                  flex:1, borderRadius:'3px 3px 1px 1px', minHeight:'3px',
                  height: bh+'%',
                  background: (bi===3||bi===8) ? 'var(--gold-grad)' : 'linear-gradient(180deg,var(--azure),var(--ink-700))',
                }"/>
              </div>
            </div>
            <!-- throws list -->
            <div style="padding:14px;border-radius:var(--r-lg);background:var(--glass-light-bg);backdrop-filter:var(--glass-blur);-webkit-backdrop-filter:var(--glass-blur);border:1px solid var(--glass-light-border);box-shadow:var(--shadow-glass)">
              <div style="font-family:var(--font-display);font-weight:600;font-size:11px;color:var(--ink);margin-bottom:10px;display:flex;align-items:center;gap:6px">
                <LIcon name="list" :size="12" :stroke="2"/> Recent throws
              </div>
              <div style="display:flex;flex-direction:column;gap:6px">
                <div v-for="(t,ti) in throws" :key="ti"
                     style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:var(--r-sm);background:rgba(255,255,255,.55);border:1px solid rgba(255,255,255,.6)">
                  <LIcon name="star" :size="14" :stroke="2" :fill="t.fav ? 'currentColor' : 'none'" :style="{ color: t.fav ? 'var(--gold-500)' : 'var(--mist)' }"/>
                  <div style="flex:1;min-width:0">
                    <div :style="{ fontFamily:'var(--font-body)', fontWeight:600, fontSize:'13.5px', color:'var(--ink)', fontStyle: t.auto ? 'italic' : 'normal', opacity: t.auto ? .8 : 1 }">{{t.n}}</div>
                    <div style="font-family:var(--font-display);font-size:10.5px;color:var(--fg3);margin-top:2px">{{t.t}}</div>
                  </div>
                  <div style="font-family:var(--font-display);font-weight:600;font-size:13.5px;color:var(--ink)">
                    {{t.d}}<span style="font-weight:500;color:var(--fg3);font-size:10.5px;margin-left:2px">m</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>

      <!-- Shared screen -->
      <template v-else-if="screen === 'shared'">
        <div style="position:absolute;inset:0;overflow:hidden;background:var(--paper)">
          <div style="position:absolute;width:280px;height:280px;left:-90px;top:-50px;border-radius:50%;background:radial-gradient(circle,rgba(111,147,181,.6),transparent 62%)"/>
          <div style="position:relative;z-index:1;height:100%;padding:60px 18px 100px;display:flex;flex-direction:column;gap:16px">
            <!-- app bar -->
            <div style="display:flex;align-items:center;gap:10px">
              <span style="display:inline-flex;align-items:center;gap:8px">
                <img src="/SmartDisc_Mark.png" alt="" style="width:26px;height:26px"/>
                <span style="font-family:var(--font-display);font-weight:700;font-size:13px;letter-spacing:.04em;color:var(--ink)">SMART DISC</span>
              </span>
              <span style="flex:1"/>
              <span style="width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,var(--ink-700),var(--ink-900));color:#fff;display:inline-flex;align-items:center;justify-content:center;font-family:var(--font-display);font-weight:600;font-size:12px">AR</span>
            </div>
            <div>
              <div style="font-family:var(--font-display);font-size:10px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:var(--azure)">Shared with you</div>
              <h2 style="margin:4px 0 4px;font-family:var(--font-display);font-weight:600;font-size:30px;letter-spacing:-.025em;line-height:1.02;color:var(--ink)">Shared discs</h2>
              <p style="margin:0;font-family:var(--font-body);font-size:13.5px;color:var(--fg2)">Read-only access to discs from your team.</p>
            </div>
            <div style="display:flex;flex-direction:column;gap:12px">
              <div v-for="(d,di) in shared" :key="di"
                   style="padding:16px;border-radius:var(--r-lg);background:var(--glass-light-bg);backdrop-filter:var(--glass-blur);-webkit-backdrop-filter:var(--glass-blur);border:1px solid var(--glass-light-border);box-shadow:var(--shadow-glass);display:flex;align-items:center;gap:12px">
                <div style="width:40px;height:40px;border-radius:var(--r-sm);background:linear-gradient(140deg,var(--mist),var(--ink-300));display:flex;align-items:center;justify-content:center;color:var(--ink);flex:none">
                  <LIcon name="users" :size="18" :stroke="2"/>
                </div>
                <div style="flex:1;min-width:0">
                  <div style="font-family:var(--font-body);font-weight:600;font-size:16px;color:var(--ink)">{{d.name}}</div>
                  <div style="font-family:var(--font-display);font-size:11px;color:var(--fg3)">by {{d.owner}}</div>
                </div>
                <div style="text-align:right">
                  <div style="font-family:var(--font-display);font-weight:600;font-size:17px;color:var(--ink)">
                    {{d.longest}}<span style="font-size:11px;color:var(--fg3);font-weight:500">m</span>
                  </div>
                  <div style="font-family:var(--font-display);font-size:10px;color:var(--fg3);margin-top:3px;letter-spacing:.03em">longest</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </IosFrame>

    <!-- Android variant -->
    <AndroidFrame v-else :width="width" :height="h">
      <div style="position:absolute;inset:0;overflow:hidden;background:var(--paper)">
        <div style="position:absolute;width:280px;height:280px;left:-90px;top:-50px;border-radius:50%;background:radial-gradient(circle,rgba(111,147,181,.6),transparent 62%)"/>
        <div style="position:relative;z-index:1;height:100%;padding:20px 18px 40px;display:flex;flex-direction:column;gap:16px">
          <div>
            <div style="font-family:var(--font-display);font-size:10px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:var(--azure)">Shared with you</div>
            <h2 style="margin:4px 0 4px;font-family:var(--font-display);font-weight:600;font-size:26px;letter-spacing:-.025em;line-height:1.02;color:var(--ink)">Shared discs</h2>
            <p style="margin:0;font-family:var(--font-body);font-size:13px;color:var(--fg2)">Read-only access from your team.</p>
          </div>
          <div style="display:flex;flex-direction:column;gap:12px">
            <div v-for="(d,di) in shared" :key="di"
                 style="padding:14px;border-radius:var(--r-lg);background:var(--glass-light-bg);backdrop-filter:var(--glass-blur);-webkit-backdrop-filter:var(--glass-blur);border:1px solid var(--glass-light-border);box-shadow:var(--shadow-glass);display:flex;align-items:center;gap:12px">
              <div style="width:36px;height:36px;border-radius:var(--r-sm);background:linear-gradient(140deg,var(--mist),var(--ink-300));display:flex;align-items:center;justify-content:center;color:var(--ink);flex:none">
                <LIcon name="users" :size="16" :stroke="2"/>
              </div>
              <div style="flex:1;min-width:0">
                <div style="font-family:var(--font-body);font-weight:600;font-size:15px;color:var(--ink)">{{d.name}}</div>
                <div style="font-family:var(--font-display);font-size:11px;color:var(--fg3)">by {{d.owner}}</div>
              </div>
              <div style="text-align:right">
                <div style="font-family:var(--font-display);font-weight:600;font-size:16px;color:var(--ink)">
                  {{d.longest}}<span style="font-size:11px;color:var(--fg3);font-weight:500">m</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AndroidFrame>
  </div>
</template>
