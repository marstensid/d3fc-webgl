var bar = fcWebgl.seriesWebglBar()

var line = fcWebgl.seriesWebglLine();

var multi = fcWebgl.seriesWebglMulti()
    .xScale(xScale)
    .yScale(yScale)
    .series([fc.autoBandwidth(bar), line]);