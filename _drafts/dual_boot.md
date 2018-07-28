## Dual Booting Windows and Linux on the Dell XPS 13 9350

Over the past week I ran into a few issues with my current laptop setup. I was running Ubuntu 16.04 and Windows 10, but my Linux installation had started getting a few hiccups. Knowing that a new version, 18.04 was out, I decided that I would wipe and reinstall Linux. For good measure, I decided to wipe Windows as well, so I could start with a completely fresh system. Here's what I did:

When you dual boot, most forums that I've read have suggested you install Windows first, then Linux. The bootloader that is installed with Linux allows you to boot to both operating systems, and installing Windows afterwards will wipe it.

### Installing Windows

1. Back up your data. A fresh install like this will wipe all of your data.

2. Create a bootable USB drive. I downloaded an ISO file from here() and then mounted that file to my USB using Rufus. I had some trouble on this step