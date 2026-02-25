#!/bin/bash
# Run this script from the public/fonts/ directory to download all self-hosted fonts
cd "$(dirname "$0")"

curl -sL -o Inter-Regular.woff2 'https://fonts.gstatic.com/s/inter/v21/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZ9hjQ.woff2'
curl -sL -o Inter-Medium.woff2 'https://fonts.gstatic.com/s/inter/v21/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuI6fAZ9hjQ.woff2'
curl -sL -o Inter-SemiBold.woff2 'https://fonts.gstatic.com/s/inter/v21/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuGKYAZ9hjQ.woff2'
curl -sL -o JetBrainsMono-Regular.woff2 'https://fonts.gstatic.com/s/jetbrainsmono/v21/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxjPVmUsaaDhw.woff2'
curl -sL -o JetBrainsMono-Medium.woff2 'https://fonts.gstatic.com/s/jetbrainsmono/v21/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxjDFmUsaaDhw.woff2'
curl -sL -o JetBrainsMono-Bold.woff2 'https://fonts.gstatic.com/s/jetbrainsmono/v21/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxj4F6UsaaDhw.woff2'
curl -sL -o EBGaramond-Italic.woff2 'https://fonts.gstatic.com/s/ebgaramond/v29/SlGFmQSNjdsmc35JDF1K5GRwUjcdlttVFm-rI7e8QI96WamXgXFI.woff2'

echo "Downloaded $(ls *.woff2 2>/dev/null | wc -l) font files"
