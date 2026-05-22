from pathlib import Path

wmapi = Path(r"E:\code\wmview\wmview_app\src\WmApi.d.ts").read_text(encoding="utf-8")
wmobj = Path(r"E:\code\wmview\wmview_app\src\WmObj.d.ts").read_text(encoding="utf-8")

text = Path("src/_运行脚本.md").read_text(encoding="utf-8")
text = text.replace("WMAPI", wmapi)
text = text.replace("WMOBJ", wmobj)
Path("src/运行脚本.md").write_text(text, encoding="utf-8")
