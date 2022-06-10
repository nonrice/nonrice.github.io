# Converts Alacritty YAML configurations to the color palette format in stylesheet

def convert(line_count):
    result = ""
    for _ in range(line_count):
        ln = "--" + input().strip().replace("0x", '#')
        ln = ln[:max(ln.rfind("'"), ln.rfind('"'))].replace("'", '').replace("'", '') + ";\n";
        if ln.find(':') >= 0:
            result += ln 
    print(result)

if __name__ == "__main__":
    convert(11)
