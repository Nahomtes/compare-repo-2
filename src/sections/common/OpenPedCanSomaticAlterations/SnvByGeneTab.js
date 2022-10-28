import React from 'react';
import { Grid } from '@material-ui/core';

import { DataTable } from '../../../components/Table';
import { defaultRowsPerPageOptions } from '../../../constants';
import Link from '../../../components/Link';
import { renderPMTLCell, addCustomFields } from './utils';
import { genericComparator } from '../../../utils/comparators';

const createExternalLink = (url, description) => {
  const link = url ? (
    <Link external to={url}>
      {' '}
      {description}{' '}
    </Link>
  ) : (
    ''
  );
  return link;
};
// TODO: Remove Once Config automation is complete
// Configuration for how the tables will display the data
let columns = [
  {
    id: 'geneSymbol',
    label: 'Gene symbol',
    renderCell: ({ geneSymbol, targetFromSourceId }) => (
      <Link to={`/target/${targetFromSourceId}`}>{geneSymbol}</Link>
    ),
  },
  {
    id: 'PMTL',
    label: 'PMTL',
    renderCell: ({ PMTL }) => renderPMTLCell(PMTL),
    filterValue: false,
  },
  {
    id: 'dataset',
    label: 'Dataset',
    sortable: true,
    comparator: (a, b) => genericComparator(a, b, 'dataset'),
  },
  {
    id: 'Disease',
    label: 'Disease',
    sortable: true,
    renderCell: ({ diseaseFromSourceMappedId, Disease }) => (
      <Link to={`/disease/${diseaseFromSourceMappedId}`}>{Disease}</Link>
    ),
  },
  { id: 'geneFullName', label: 'Gene full name' },
  { id: 'geneType', label: 'Gene type' },
  { id: 'proteinRefseqId', label: 'Protein RefSeq ID' },
  { id: 'targetFromSourceId', label: 'Gene Ensembl ID', sortable: true },
  { id: 'proteinEnsemblId', label: 'Protein Ensembl ID', sortable: true },
  {
    id: 'totalMutationsOverPatientsInDataset',
    label: 'Total mutations / Subjects in dataset',
    sortable: true,
    comparator: (row1, row2) =>
      genericComparator(row1, row2, 'frequencyInOverallDataset', true),
  },
  {
    id: 'frequencyInOverallDataset',
    label: 'Frequency in overall dataset',
    sortable: true,
    comparator: (row1, row2) =>
      genericComparator(row1, row2, 'frequencyInOverallDataset', true),
  },
  {
    id: 'totalPrimaryTumorsMutatedOverPrimaryTumorsInDataset',
    label: 'Total primary tumors mutated / Primary tumors in dataset',
    sortable: true,
    comparator: (row1, row2) =>
      genericComparator(row1, row2, 'frequencyInPrimaryTumors', true),
  },
  {
    id: 'frequencyInPrimaryTumors',
    label: 'Frequency in primary tumors',
    sortable: true,
    comparator: (row1, row2) =>
      genericComparator(row1, row2, 'frequencyInPrimaryTumors', true),
  },
  {
    id: 'totalRelapseTumorsMutatedOverRelapseTumorsInDataset',
    label: 'Total relapse tumors mutated / Relapse tumors in dataset',
    sortable: true,
    comparator: (row1, row2) =>
      genericComparator(row1, row2, 'frequencyInRelapseTumors', true),
  },
  {
    id: 'frequencyInRelapseTumors',
    label: 'Frequency in relapse tumors',
    sortable: true,
    comparator: (row1, row2) =>
      genericComparator(row1, row2, 'frequencyInRelapseTumors', true),
  },
  { id: 'OncoKBCancerGene', label: 'OncoKB cancer gene' },
  { id: 'OncoKBOncogeneTSG', label: 'OncoKB oncogene|TSG' },
  {
    id: 'pedcbioPedotOncoprintPlotURL',
    label: 'PedcBio PedOT oncoprint plot',
    renderCell: ({ pedcbioPedotOncoprintPlotURL }) =>
      createExternalLink(pedcbioPedotOncoprintPlotURL, 'oncoprint'),
    filterValue: ({ pedcbioPedotOncoprintPlotURL }) =>
      pedcbioPedotOncoprintPlotURL ? 'oncoprint' : '',
  },
  {
    id: 'pedcbioPedotMutationsPlotURL',
    label: 'PedcBio PedOT mutation plot',
    renderCell: ({ pedcbioPedotMutationsPlotURL }) =>
      createExternalLink(pedcbioPedotMutationsPlotURL, 'mutations'),
    filterValue: ({ pedcbioPedotMutationsPlotURL }) =>
      pedcbioPedotMutationsPlotURL ? 'mutations' : '',
  },
];
// TODO: Remove Once Config automation is complete
let dataDownloaderColumns = [
  { id: 'geneSymbol' },
  { id: 'PMTL' },
  { id: 'dataset' },
  { id: 'Disease' },
  { id: 'diseaseFromSourceMappedId', exportLabel: 'efo' },
  { id: 'MONDO' },
  { id: 'geneFullName' },
  { id: 'geneType' },
  { id: 'proteinRefseqId' },
  { id: 'targetFromSourceId', exportLabel: 'geneEnsemblId' },
  { id: 'proteinEnsemblId' },
  {
    id: 'totalMutationsOverPatientsInDataset',
    exportLabel: 'totalMutationsOverSubjectsInDataset',
  },
  { id: 'frequencyInOverallDataset' },
  { id: 'totalPrimaryTumorsMutatedOverPrimaryTumorsInDataset' },
  { id: 'frequencyInPrimaryTumors' },
  { id: 'totalRelapseTumorsMutatedOverRelapseTumorsInDataset' },
  { id: 'frequencyInRelapseTumors' },
  { id: 'OncoKBCancerGene' },
  { id: 'OncoKBOncogeneTSG' },
  {
    id: 'pedcbioPedotOncoprintPlotURL',
    exportLabel: 'pedcbioPedotOncoprintPlot',
  },
  {
    id: 'pedcbioPedotMutationsPlotURL',
    exportLabel: 'pedcbioPedotMutationPlot',
  },
];

function SnvByGeneTab({
  data,
  BODY_QUERY,
  variables,
  dataDownloaderFileStem,
  configColumns,
  configDataDownloaderColumns,
}) {
  // Set a minimum column width
  addCustomFields(columns);

  return (
    <Grid container>
      <Grid item xs={12}>
        <DataTable
          dataDownloaderColumns={
            configDataDownloaderColumns || dataDownloaderColumns
          }
          dataDownloaderFileStem={dataDownloaderFileStem}
          columns={configColumns || columns}
          rows={data}
          dataDownloader
          showGlobalFilter
          rowsPerPageOptions={defaultRowsPerPageOptions}
          noWrapHeader={false}
          order="asc"
          query={BODY_QUERY.loc.source.body}
          variables={variables}
          stickyHeader
          noWrap={false}
        />
      </Grid>
    </Grid>
  );
}

export default SnvByGeneTab;
