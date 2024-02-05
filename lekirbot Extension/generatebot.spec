# -*- mode: python ; coding: utf-8 -*-
import os
import sys
import platform


block_cipher = None

pat= os.getcwd()

a = Analysis(
    ['generatebot.py'],
    pathex=[pat,pat+'/lekirbot'],
    binaries=[],
    datas=[(pat+"/logo.ico","."),(pat+"/lekirbot/","lekirbot")],
    hiddenimports=[],
    hookspath=[],
    hooksconfig={},
    runtime_hooks=[],
    excludes=[],
    win_no_prefer_redirects=False,
    win_private_assemblies=False,
    cipher=block_cipher,
    noarchive=False,
)
pyz = PYZ(a.pure, a.zipped_data, cipher=block_cipher)


exe = EXE(pyz,
          a.scripts,
          a.binaries,
          a.zipfiles,
          a.datas,
          name='GenerateBot',
          debug=False,
          strip=False,
          upx=True,
          runtime_tmpdir=None,
          console=False,
          icon=pat+"/logo.ico"
)
# coll = COLLECT(
#     exe,
#     a.binaries,
#     a.zipfiles,
#     a.datas,
#     strip=False,
#     upx=True,
#     upx_exclude=[],
#     name='generatebot',
#     console=False,
#     icon=pat+"/logo.ico"
# )
