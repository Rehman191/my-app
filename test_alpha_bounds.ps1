Add-Type -AssemblyName System.Drawing
$logoPath = "d:\minerals\my-app\public\images\logo.png"

if (Test-Path $logoPath) {
    try {
        $bmp = New-Object System.Drawing.Bitmap($logoPath)
        $width = $bmp.Width
        $height = $bmp.Height

        $minX = $width
        $maxX = 0
        $minY = $height
        $maxY = 0

        $visibleCount = 0

        # Scan skipping outer 20 pixels
        for ($y = 20; $y -lt ($height - 20); $y++) {
            for ($x = 20; $x -lt ($width - 20); $x++) {
                $pixel = $bmp.GetPixel($x, $y)
                # If pixel is visible (not transparent)
                if ($pixel.A -gt 50) {
                    $visibleCount++
                    if ($x -lt $minX) { $minX = $x }
                    if ($x -gt $maxX) { $maxX = $x }
                    if ($y -lt $minY) { $minY = $y }
                    if ($y -gt $maxY) { $maxY = $y }
                }
            }
        }
        $bmp.Dispose()

        Write-Output "Visible pixels (A > 50) in middle area: $visibleCount"
        if ($visibleCount -gt 0) {
            $cropW = $maxX - $minX + 1
            $cropH = $maxY - $minY + 1
            Write-Output "Visible Bounds: $minX, $minY to $maxX, $maxY (Width: $cropW, Height: $cropH)"
        } else {
            Write-Output "No visible pixels found."
        }
    } catch {
        Write-Output "Error: $_"
    }
} else {
    Write-Output "Error: File not found."
}
