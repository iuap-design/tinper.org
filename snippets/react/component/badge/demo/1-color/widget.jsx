import { Badge } from 'tinper-bee';
function demo1 () {
    return (
        <div className="demo-badge">
                <Badge colors="primary">primary</Badge>
                <Badge colors="info">info</Badge>
                <Badge colors="dark">dark</Badge>
                <Badge colors="success">success</Badge>
                <Badge colors="warning">warning</Badge>
                <Badge colors="danger">danger</Badge>
        </div>
    );
}


ReactDOM.render(demo1(), document.getElementById('ReactBadgeDemo1'));
