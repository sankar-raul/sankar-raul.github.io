function skeleton(rows, hex, parent, classes = []) {
    for (let i = 0; i < rows; i++) {
        let row = document.createElement('div');
        if (classes.length > 0) {
            classes.forEach(cls => row.classList.add(cls));
        } else {
            console.log("Classlist needed");
            return 'Classlist must needed';
        }
        for (let j = 0; j < hex; j++) {
            let child = document.createElement('div');
            child.classList.add('hexagon');
            row.appendChild(child);

        }
        parent.appendChild(row);
    }
}

skeleton(22,18,document.getElementsByClassName("container")[0],["row"]);