// Engine-side registration for the playback-engine bridge. Side-effect module:
// importing it installs the engine's operations into @/store/playbackEngineBridge.
// MainApp side-effect-imports this at boot. Lives with the engine (moves into
// @/features/playback alongside playerStore); the bridge itself stays in core.
import { usePlayerStore } from './playerStore';
import { clearQueueServerForPlayback } from '../utils/playback/playbackServer';
import { registerPlaybackEngineBridge } from './playbackEngineBridge';

registerPlaybackEngineBridge({
  getQueueServerId: () => usePlayerStore.getState().queueServerId,
  clearQueueServerForPlayback,
  updateReplayGainForCurrentTrack: () => usePlayerStore.getState().updateReplayGainForCurrentTrack(),
});
