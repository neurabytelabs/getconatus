/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Presence } from './components/Presence';
import { Command } from './components/Command';
import { Awakening } from './components/Awakening';
import { SoulMap } from './components/SoulMap';
import { Mirror } from './components/Mirror';
import { Protocol } from './components/Protocol';
import { Spread } from './components/Spread';
import { Library } from './components/Library';
import { Void } from './components/Void';

export default function App() {
  return (
    <main className="bg-void min-h-screen">
      <Presence />
      <Command />
      <Awakening />
      <SoulMap />
      <Mirror />
      <Protocol />
      <Spread />
      <Library />
      <Void />
    </main>
  );
}
